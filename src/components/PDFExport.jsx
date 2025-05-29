import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDFExport = () => {
  const exportToPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(img, 'PNG', 0, 0, width, height);
      pdf.save("analisis-padel.pdf");
    });
  };

  return (
    <button onClick={exportToPDF} className="bg-green-600 text-white px-4 py-2 mt-6">
      Exportar informe en PDF
    </button>
  );
};

export default PDFExport;

