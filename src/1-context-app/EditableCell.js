import React, { useContext } from 'react';
import { color } from '../utils';
import { SpreadsheetContext } from './context';

export default function EditableCell({ x, y, atom }) {
  const [value, setValue] = useContext(SpreadsheetContext);
  const backgroundColor = `#${color(x, y)}`;

  return (
    <div
      style={{
        width: '40px',
        display: 'inline-block',
        backgroundColor,
        padding: '8px',
        margin: 0,
        textAlign: 'center',
      }}
      onMouseEnter={() => {
        const clonedData = JSON.parse(JSON.stringify(value));
        clonedData[x][y] = Math.floor(Math.random() * 100);
        setValue(clonedData);
      }}
    >
      {value[x][y]}
    </div>
  );
}
