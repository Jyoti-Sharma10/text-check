const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './public/TextFiles');
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  // Assuming you want to send a response back to the client
  res.json({ message: 'File uploaded successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
