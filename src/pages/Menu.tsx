import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import PageFlip from "react-pageflip";
import { Button } from "@/components/ui/button";
import foodPdf from "@/assets/menu/food.pdf";
import drinksPdf from "@/assets/menu/drinks.pdf";


import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {  GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Menu = () => {
  const [activeTab, setActiveTab] = useState<"food" | "beverage">("food");

  const menus = {
  food: {
    title: "Food Menu",
    pdfUrl: foodPdf, 
  },
  beverage: {
    title: "Beverage Menu",
    pdfUrl: drinksPdf,
  },
};
  console.log(menus.food.pdfUrl);
  const FlipBook = ({
    pdfUrl,
    title,
  }: {
    pdfUrl: string;
    title: string;
  }) => {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    };

    return (
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient-gold mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground">
            Page {pageNumber} of {numPages}
          </p>
        </div>

        {/* Flipbook */}
        <div className="bg-amber-950rounded-3xl shadow-2xl overflow-hidden">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(err) => console.error("PDF load error:", err)}
            onSourceError={(err) => console.error("PDF source error:", err)}
            loading={
              <div className="h-[850px] flex items-center justify-center">
                <FileText className="w-14 h-14 animate-spin text-gold" />
              </div>
            }
          >
            {numPages > 0 && (
             <PageFlip
                style={{}}
                startPage={0}
                usePortrait={false}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={0.5}
                showPageCorners={false}
                disableFlipByClick={false}
                clickEventForward={true}
                swipeDistance={30}
                useMouseEvents={true}
                width={250}
                height={450}
                size="stretch"
                minWidth={380}
                maxWidth={850}
                minHeight={500}
                maxHeight={1100}
                showCover={true}
                drawShadow={true}
                flippingTime={900}
                mobileScrollSupport={true}
                onFlip={(e) => setPageNumber(e.data + 1)}
                className="mx-auto"
              >

                {Array.from({ length: numPages }, (_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-secondary"
                  >
                    <Page
                      pageNumber={index + 1}
                      width={520}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </div>
                ))}
              </PageFlip>
            )}
          </Document>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-pattern-arabesque">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.25em] uppercase mb-2">
            Discover
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic Arabian dishes prepared with the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-16">
            <Button
              variant={activeTab === "food" ? "gold" : "outline"}
              size="xl"
              className="px-12 py-6 text-lg font-heading rounded-full"
              onClick={() => setActiveTab("food")}
            >
              <FileText className="mr-3 h-6 w-6" />
              Food Menu
            </Button>

            <Button
              variant={activeTab === "beverage" ? "gold" : "outline"}
              size="xl"
              className="px-12 py-6 text-lg font-heading rounded-full"
              onClick={() => setActiveTab("beverage")}
            >
              <FileText className="mr-3 h-6 w-6" />
              Beverages
            </Button>
          </div>

          {/* Active Flipbook */}
          {activeTab === "food" && (
            <FlipBook
              pdfUrl={menus.food.pdfUrl}
              title={menus.food.title}
            />
          )}

          {activeTab === "beverage" && (
            <FlipBook
              pdfUrl={menus.beverage.pdfUrl}
              title={menus.beverage.title}
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
