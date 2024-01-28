import React from 'react';
import Viewer from './viewer';
import { useState } from 'react';
export default function DocuViewer() {
        const [selectedFile, setSelectedFile] = useState(null);
        const [fileAddress, setFileAddress] = useState(null);
      
        const handleChange = (e) => {
            e.preventDefault()
          const file = e.target.files[0];
          setSelectedFile(file);
        };
      
        const handleSubmit = (e) => {
            e.preventDefault()
            localStorage.setItem('saveaddress',selectedFile)
            const ad=localStorage.get
           
      
            
        };
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
