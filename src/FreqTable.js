import React from 'react';

function FreqTable({ wordFrequencies }) {
  // Check if wordFrequencies is defined
  if (!wordFrequencies) {
    return null; // If not defined, don't render anything
  }

  const wordFrequencyEntries = Object.entries(wordFrequencies);

  // Check if there are no word frequencies to display
  if (wordFrequencyEntries.length === 0) {
    return <p>No word frequencies to display.</p>;
  }

  return (
    <>
    <h2 className='text-center my-2'>Frequency Table</h2>
    <div style={{ display: 'flex', justifyContent: 'center' }} className='mt-2 mb-5'>
      <table className="table table-bordered">
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
      </table>
    </div>
    </>
  );
}

export default FreqTable;
