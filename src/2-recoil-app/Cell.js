import React from 'react';
import { lightenColor } from '../utils';
import {
  // useRecoilState,
  useRecoilValue,
} from 'recoil';

function color(x, y) {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function Cell({ x, y, atom }) {
  const value = useRecoilValue(atom);
  const backgroundColor = `#${lightenColor(color(x, y), 20)}`;

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
    >
      {value}
    </div>
  );
}

export default Cell;
