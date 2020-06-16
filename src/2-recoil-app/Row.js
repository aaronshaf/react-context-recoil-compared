import React from 'react';
import EditableCell from './EditableCell';
import SumCell from './SumCell';

function Row({ size, x }) {
  const cells = [...Array(size).keys()].map((_, y) => {
    return <EditableCell key={y} x={x} y={y} />;
  });

  cells.push(<SumCell key={size + 100} x={x} size={size} />);

  return <div style={{ border: '1px', borderColor: 'green' }}>{cells}</div>;
}

export default Row;
