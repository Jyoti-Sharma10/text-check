import React, { useState } from "react";
import img from "./assests/fileImg.jpg";
import "./global.css";
import WordCards from "./WordCards";
import FreqTable from "./FreqTable";

function Upload() {
  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [data, setData] = useState(null);
  const [viewWordCards, setViewWordCards] = useState(true);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if a file was selected
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    // Check if the file size is greater than 5MB (5 * 1024 * 1024 bytes)
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size should not exceed 5MB.");
      return;
    }

    if (selectedFile.type === "text/plain") {
      // Only set the file if it's a .txt file
      setFile(selectedFile);
    } else {
      alert("Please select a .txt file.");
    }
  };

  const upload = () => {
    if (!file) {
      alert("Please select a .txt file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        setFileUploaded(true);

        // Setting the data received from the API into the state
        setData(responseData.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container my-3">
      <h2 className="text-center mt-5">Upload your txt file to analyze</h2>
      <div className="container">
        <img src={img} className="responsive-image" alt="File" />
      </div>
      <div className="container my-2 text-center">
        <input type="file" onChange={handleFileChange} accept=".txt" />
      </div>
      <div className="container-my-2 text-center">
        <button type="button" className="btn-custom" onClick={upload}>
          Upload File
        </button>
      </div>

      {/* Toggle buttons at the top */}
      <div className="container text-center">
        <button
          type="button"
          className={`btn-custom ${
            viewWordCards ? "active-button" : "inactive-button"
          }`}
          onClick={() => setViewWordCards(true)}
        >
          Show Word Cards
        </button>
        <button
          type="button"
          className={`btn-custom ${
            viewWordCards ? "active-button" : "inactive-button"
          }`}
          onClick={() => setViewWordCards(false)}
        >
          Show Frequency Table
        </button>
      </div>

      <div className="container">
        {/* Conditional render based on the viewWordCards state */}
        {viewWordCards
          ? fileUploaded && <WordCards data={data} />
          : fileUploaded &&
            data.wordFrequencies && (
              <FreqTable wordFrequencies={data.wordFrequencies} />
            )}
      </div>
    </div>
  );
}

export default Upload;
