import React from 'react';
import Spreadsheet from './Spreadsheet';
import { RecoilRoot } from 'recoil';

function App() {
  const size = 6;

  return (
    <div className="App">
      <RecoilRoot>
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
      </RecoilRoot>
    </div>
  );
}

export default App;
