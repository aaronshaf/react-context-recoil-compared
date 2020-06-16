import React, { useState } from 'react';
import Spreadsheet from './Spreadsheet';
import { SpreadsheetContext } from './context';

function App() {
  const size = 6;
  const data = [...Array(size).keys()].map((x) =>
    [...Array(size).keys()].map((x) => Math.floor(Math.random() * 100))
  );
  const value = useState(data);

  return (
    <div className="App">
      <SpreadsheetContext.Provider value={value}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <Spreadsheet size={size} />
          <Spreadsheet size={size} />
        </div>
      </SpreadsheetContext.Provider>
    </div>
  );
}

export default App;
