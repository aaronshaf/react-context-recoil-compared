import React, { useContext } from 'react';
import EditableCell from './EditableCell';
import { SpreadsheetContext } from './context';
import { color } from '../utils';

function Row({ size, x }) {
  const [value] = useContext(SpreadsheetContext);
  const cells = [...Array(size).keys()].map((_, y) => {
    return <EditableCell key={y} x={x} y={y} />;
  });
  cells.push(
    <div
      key={size + 1}
      style={{
        width: '40px',
        display: 'inline-block',
        padding: '6px',
        margin: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        border: '2px solid red',
        borderColor: `#${color(11, x)}`,
      }}
    >
      {value[x].reduce((sum, value) => sum + value, 0)}
    </div>
  );
  return <div style={{ border: '1px', borderColor: 'green' }}>{cells}</div>;
}

export default Row;
