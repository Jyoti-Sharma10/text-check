import React from 'react';
import Table from 'react-bootstrap/Table';
import './global.css';

function FreqTable({ wordFrequencies }) {
  // Check if wordFrequencies is defined
  if (!wordFrequencies) {
    return null; 
  }

  const wordFrequencyEntries = Object.entries(wordFrequencies);

  // if there are no word frequencies to display
  if (wordFrequencyEntries.length === 0) {
    return <p>No word frequencies to display.</p>;
  }

  return (
    <>
      <h2 className='text-center my-2'>Frequency Table</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }} className='mt-2 mb-5'>
        <Table striped bordered className='custom-table'>
          <thead>
            <tr>
              <th>Word</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {wordFrequencyEntries.map(([word, frequency], index) => (
              <tr key={index}>
                <td>{word}</td>
                <td>{frequency}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default FreqTable;
