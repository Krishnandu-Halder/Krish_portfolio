// import PdfViewer from '../components/PdfViewer';

// export default function PDFPage() {
//   return <PdfViewer />;
// }
import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('../components/PdfViewer'), {
    ssr: false,
});

export default function PDFViewerPage() {
    return <PdfViewer />;
}
