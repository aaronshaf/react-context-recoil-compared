import React from 'react';
import Row from './Row';

function Spreadsheet({ size }) {
  const rows = [...Array(size).keys()].map((_, x) => {
    return <Row key={x} x={x} size={size} />;
  });
  return (
    <div
      style={{
        display: 'inline-block',
        border: '1px',
        borderColor: 'yellow',
        padding: '8px',
      }}
    >
      {rows}
    </div>
  );
}

export default Spreadsheet;
