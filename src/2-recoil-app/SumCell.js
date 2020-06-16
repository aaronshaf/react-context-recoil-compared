import React from 'react';
import { rowSelector } from './atoms';
import { useRecoilValue } from 'recoil';
import { color } from '../utils';

export default function SumCell({ x, size }) {
  const total = useRecoilValue(rowSelector(x, size));
  return (
    <div
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
      {total}
    </div>
  );
}
