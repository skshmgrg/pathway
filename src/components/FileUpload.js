import React, { useState } from 'react';

export function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-2">Upload a File</h2>
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-2 block w-full text-sm text-gray-500 
                   file:mr-4 file:py-2 file:px-4
                   file:rounded file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-500 file:text-white
                   hover:file:bg-blue-600"
      />
      <button 
        onClick={handleFileUpload} 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {selectedFile && (
        <p className="mt-2 text-sm text-gray-600">File selected: {selectedFile.name}</p>
      )}
    </div>
  );
}



