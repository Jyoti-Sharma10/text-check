import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/plain') {
      // Only set the file if it's a .txt file
      setFile(selectedFile);
    } else {
      alert('Please select a .txt file.');
    }
  };

  const upload = () => {
    if (!file) {
      alert('Please select a .txt file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data); // You can handle the response from the server here
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".txt" />
      <button type="button" onClick={upload}>
        Upload .txt File
      </button>
    </div>
  );
}

export default App;
