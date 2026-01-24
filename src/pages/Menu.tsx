import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { FileText } from "lucide-react";
import { Document, Page } from "react-pdf";
import { Button } from "@/components/ui/button";
import HTMLFlipBook from "react-pageflip";

import foodPdf from "@/assets/menu/food.pdf";
import drinksPdf from "@/assets/menu/drinks.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { GlobalWorkerOptions, PDFDocumentProxy } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type TabKey = "food" | "beverage";

interface FlipBookRef {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
  };
}

const MenuViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageRatio, setPageRatio] = useState(1.414); // A4 default
  const [containerWidth, setContainerWidth] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);

  const bookRef = useRef<FlipBookRef>(null);

  /* Responsive width and mobile detection */
  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
      if (width < 640) {
        // Mobile: single page view
        setContainerWidth(Math.min(width - 32, 500));
      } else if (width < 1024) {
        // Tablet: smaller two-page view
        setContainerWidth(Math.min(width - 48, 800));
      } else {
        // Desktop: full two-page view
        setContainerWidth(Math.min(width - 48, 1200));
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Detect actual PDF aspect ratio */
  const onDocumentLoadSuccess = async (pdf: PDFDocumentProxy) => {
    setNumPages(pdf.numPages);

    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1 });
    setPageRatio(viewport.height / viewport.width);
  };

  const goNext = () => bookRef.current?.pageFlip().flipNext();
  const goPrev = () => bookRef.current?.pageFlip().flipPrev();

  /* Dynamic dimensions based on screen size */
  const pageWidth = isMobile 
    ? Math.floor(containerWidth) // Mobile: full width for single page
    : Math.floor(containerWidth / 2); // Desktop/Tablet: half width for two pages
  const height = Math.floor(pageWidth * pageRatio);
  const bookWidth = isMobile ? pageWidth : pageWidth * 2;

  return (
    <div className="w-full flex flex-col items-center overflow-x-clip">
      {/* Navigation buttons for mobile */}
      {isMobile && (
        <div className="flex gap-4 mb-4">
          <Button
            onClick={goPrev}
            variant="outline"
            size="sm"
            className="text-gold"
          >
            ← Previous
          </Button>
          <Button
            onClick={goNext}
            variant="outline"
            size="sm"
            className="text-gold"
          >
            Next →
          </Button>
        </div>
      )}

      <div className="flex items-center gap-4 py-6 overflow-x-clip w-full justify-center">
        {/* Flipbook container */}
        <div
          className="relative mx-auto overflow-hidden touch-none"
          style={{ 
            width: bookWidth, 
            height, 
            maxWidth: "100%",
            minWidth: isMobile ? "100%" : "auto"
          }}
        >
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div
                className="flex items-center justify-center"
                style={{ height }}
              >
                <FileText className="w-12 h-12 animate-spin text-gold" />
              </div>
            }
          >
            {numPages > 0 && (
              <HTMLFlipBook
                key={`${isMobile}-${pageWidth}`}
                ref={bookRef}
                width={pageWidth}
                height={height}
                size="fixed"
                autoSize={false}
                showCover={false}
                mobileScrollSupport={true}
                className="shadow-2xl rounded-lg mx-auto"
                flippingTime={isMobile ? 500 : 700}
                maxShadowOpacity={0.5}
                showPageCorners={true}
                useMouseEvents={true}
                swipeDistance={isMobile ? 50 : 0}
                clickEventForward={true}
                usePortrait={isMobile}
                disableFlipByClick={false}
              >
                {Array.from({ length: numPages }).map((_, i) => (
                  <div
                    key={i}
                    className="overflow-hidden bg-white touch-pan-x"
                    style={{ width: pageWidth, height }}
                  >
                    <Page
                      pageNumber={i + 1}
                      width={pageWidth}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            )}
          </Document>
        </div>
      </div>

      {isMobile && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          Swipe or tap to flip pages
        </p>
      )}
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("food");

  const menus: Record<TabKey, { pdfUrl: string }> = {
    food: { pdfUrl: foodPdf },
    beverage: { pdfUrl: drinksPdf },
  };

  return (
    <Layout>
      <section className="py-12 md:py-16 bg-pattern-arabesque text-center">
        <p className="text-gold tracking-[0.25em] uppercase text-sm mb-4">Discover</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading text-gradient-gold font-bold">
          Our Menu
        </h1>
      </section>

      <section className="py-4 md:py-8 overflow-x-clip">
        <div className="container mx-auto px-2 sm:px-4 overflow-x-clip">
          <div className="flex justify-center gap-3 sm:gap-6 mb-6 md:mb-8">
            <Button
              variant={activeTab === "food" ? "gold" : "outline"}
              onClick={() => setActiveTab("food")}
              size="sm"
              className="px-10 py-4 md:px-12 md:py-6 text-base md:text-lg font-heading rounded-full transition-transform duration-200 hover:scale-[1.02]"
            >
              Food
            </Button>

            <Button
              variant={activeTab === "beverage" ? "gold" : "outline"}
              onClick={() => setActiveTab("beverage")}
              size="sm"
              className="px-10 py-4 md:px-12 md:py-6 text-base md:text-lg font-heading rounded-full transition-transform duration-200 hover:scale-[1.02]"
            >
              Beverages
            </Button>
          </div>

          <MenuViewer key={activeTab} pdfUrl={menus[activeTab].pdfUrl} />
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
