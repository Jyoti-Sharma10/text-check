const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path'); 
const PORT = 5000;
const { analyzeText } = require('./textAnalysis');
const timestamp = Date.now(); 

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './TextFiles');
  },
  filename: function (req, file, cb) {
    const uploadedFileName = `${timestamp}_${file.originalname}`; // Use the same timestamp here
    return cb(null, uploadedFileName);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const uploadedFileName = `${timestamp}_${req.file.originalname}`; // Use the same timestamp here
  const filePath = path.join('./TextFiles', uploadedFileName);

  console.log(req.body);
  console.log(req.file);

  // Assuming you want to send a response back to the client
  res.json({ message: 'File uploaded successfully!' });

  // Now you can use 'filePath' when reading the file
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      // Handle the error, if any
    } else {
      //console.log('File data:', data);

      // Calculate the top 5 most frequently occurring words
      const topWords = getTopWords(data);

      // Log or send the topWords data as needed
      console.log('Top 5 Words:', topWords);

      // You can also send it as a response to the client if needed
      // res.json({ topWords });
    }
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
