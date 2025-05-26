import React from 'react'
import { Document,Page,Text, View } from '@react-pdf/renderer'
const PdfFile = '/Krishnandu Halder.pdf'; // ✅ Correct: reference from public folder

function ResumeDocument() {
  return (
    <Document file={PdfFile}>

    </Document>
  )
}

export default ResumeDocument
