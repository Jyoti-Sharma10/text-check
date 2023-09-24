import React from 'react';

function FreqTable({ wordFrequencies }) {
  if (!wordFrequencies) {
    return null;
  }

  return (
    <div className="table-container"> 
      <table className="table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(wordFrequencies).map(([word, frequency], index) => (
            <tr key={index}>
              <td>{word}</td>
              <td>{frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FreqTable;
