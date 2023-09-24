import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload from './Upload';
import FreqTable from './FreqTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/freqtable" element={<FreqTable />} />
      </Routes>
    </Router>
  );
}

export default App;
