import React from 'react';
import Viewer from './viewer';
import { useState } from 'react';
export default function DocuViewer() {
        const [selectedFile, setSelectedFile] = useState(null);
        const [fileAddress, setFileAddress] = useState(null);
      
        const handleChange = (e) => {
            // e.preventDefault()
          // const file = e.target.files[0];
          setSelectedFile(e.target.files[0]);
          console.log(selectedFile)
        };
      
         const handleSubmit = (e) => {
        //     e.preventDefault()
        //   if (selectedFile) {
        //     // Use the FileReader API to read the file content

      
           
        //       // Access the file content
        //       const fileContent = e.target.result;
      
        //       // Save file content in localStorage
        //       localStorage.setItem('savedFileContent', fileContent);
      
        //       // Save file address in state for display
        //       setFileAddress(localStorage.getItem('savedFileContent'));
              
        //       // You can customize this part to perform additional actions if needed
        //       alert('File saved successfully!');
      
        //     // Read the file as text (you can adjust this based on your needs)
        //   } else {
        //     alert('Please select a file before saving.');
        //   }
         }
  return (
    <div className='container'>
        <form action="">
            <input type="file" onChange={handleChange} className='form-control' />
            <button type='submit' onSubmit={handleSubmit}  className='btn btn-success'> documentview</button>
        </form>
        <h2>view Document</h2> 
        <div className="pdf-container">
            <Viewer docs={fileAddress}/>
           


        </div> 
    </div>
  )
}
