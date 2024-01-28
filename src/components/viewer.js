import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


export default function Viewer(props) {
    const docs=[{uri:require("../random.txt")}];
    docs.push(props.docs)
  
  return (
    <DocViewer documents={docs} initialActiveDocument={docs[0]} pluginRenderers={DocViewerRenderers} />  
  )
}
