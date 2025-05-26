'use client'; // If using Next.js App Router

import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="h-screen w-full">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <div className="h-full">
                    <Viewer
                        fileUrl="/Krishnandu Halder.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </div>
            </Worker>
        </div>
    );
};

export default PdfViewer;



















// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import React, { useState } from 'react';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export default function PdfViewer() {
//   const [numPages, setNumPages] = useState(null);

//   const onLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-4xl border border-gray-300 shadow-lg">
//         <Document
//           file="/Krishnandu Halder.pdf"
//           onLoadSuccess={onLoadSuccess}
//           loading={<p>Loading PDF...</p>}
//         >
//           {Array.from(new Array(numPages), (el, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               width={800}
//             />
//           ))}
//         </Document>
//       </div>

//       <a
//         href="/Krishnandu Halder.pdf"
//         download
//         className="mt-4 inline-block bg-dark text-light p-2 px-4 rounded hover:bg-light hover:text-dark border border-dark"
//       >
//         Download PDF
//       </a>
//     </div>
//   );
// }



















// // import React from 'react'
// // import { PDFViewer } from '@react-pdf/renderer'
// // import ResumeDocument from './ResumeDocument'


// // export default function PdfViewer() {
// //   return (
// //     <>
// //    <PDFViewer>
// //     <ResumeDocument/>
// //    </PDFViewer>
// //    <a 
// //   href="/Krishnandu Halder.pdf" 
// //   download 
// //   className="mt-4 inline-block bg-dark text-light p-2 px-4 rounded hover:bg-light hover:text-dark border border-dark"
// // >
// //   Download PDF
// // </a>
// // </>

// //   )
// // }













// // // import { Document,Page } from '@react-pdf/renderer';
// // // import React, { useState } from 'react';
// // // import PdfFile from '../../public/Krishnandu Halder.pdf'



// // // function PdfViewer() {
// // //     const [numPage,setNumPages] = useState(null)
// // //     function onDocumentSuccess({numPage}){
// // //         setNumPages(numPage)
// // //     }
// // //   return (
// // //     <div>

// // //     </div>
// // //   )
// // // }

// // // export default PdfViewer

// // // import React, { useState } from 'react';
// // // import { Document, Page } from 'react-pdf'; // make sure you're using 'react-pdf' for viewing
// // // import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// // // import 'react-pdf/dist/esm/Page/TextLayer.css';

// // // function PdfViewer() {
// // //   const [numPages, setNumPages] = useState(null);

// // //   const onDocumentLoadSuccess = ({ numPages }) => {
// // //     setNumPages(numPages);
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
// // //       <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>

// // //       <div className="w-full max-w-4xl border border-gray-300 rounded shadow p-4 bg-white">
// // //         <Document
// // //           file="/Krishnandu Halder.pdf" // public path
// // //           onLoadSuccess={onDocumentLoadSuccess}
// // //         >
// // //           {Array.from(new Array(numPages), (el, index) => (
// // //             <Page key={`page_${index + 1}`} pageNumber={index + 1} />
// // //           ))}
// // //         </Document>
// // //       </div>

// // //       {/* ✅ Download Button */}
// // //       <a
// // //         href="/Krishnandu Halder.pdf"
// // //         download
// // //         className="mt-6 inline-block bg-dark text-light dark:bg-light dark:text-dark px-6 py-2 rounded hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light font-semibold border-2 border-dark dark:border-light transition"
// // //       >
// // //         Download PDF
// // //       </a>
// // //     </div>
// // //   );
// // // }

// // // export default PdfViewer;


// // // Create styles
// // // const styles = StyleSheet.create({
// // //   page: {
// // //     flexDirection: 'row',
// // //     backgroundColor: '#E4E4E4',
// // //   },
// // //   section: {
// // //     margin: 10,
// // //     padding: 10,
// // //     flexGrow: 1,
// // //   },
// // // });

// // // // Create Document Component
// // // // const PdfViewer = () => (
// // // //   <Document>
// // // //     <Page size="A4" style={styles.page}>
// // // //       <View style={styles.section}>
// // // //         <Text>Section #1</Text>
// // // //       </View>
// // // //       <View style={styles.section}>
// // // //         <Text>Section #2</Text>
// // // //       </View>
// // // //     </Page>
// // // //   </Document>
// // // );
