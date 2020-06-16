import React, { useContext } from 'react';
import { color } from '../utils';
import { SpreadsheetContext } from './context';

export default function EditableCell({ x, y, atom }) {
  const [value, setValue] = useContext(SpreadsheetContext);
  const backgroundColor = `#${color(x, y)}`;

  const onHover = () => {
    const clonedData = JSON.parse(JSON.stringify(value));
    clonedData[x][y] = clonedData[x][y] + 1;
    setValue(clonedData);
  };

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
      onMouseEnter={onHover}
      onTouchStart={onHover}
      onTouchMove={onHover}
    >
      {value[x][y]}
    </div>
  );
}
