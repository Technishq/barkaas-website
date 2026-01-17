import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { pdfjs } from 'react-pdf'

pdfjs.disableWorker = true
createRoot(document.getElementById("root")!).render(<App />);
