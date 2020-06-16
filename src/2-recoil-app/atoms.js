import {
  // RecoilRoot,
  atom,
  selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';
import memoize from 'fast-memoize';

export const cellAtom = memoize((x, y) =>
  atom({
    key: `cell-${x}-${y}`, // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  })
);

export const rowSelector = memoize((row, size) =>
  selector({
    key: `row-${row}`, // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      let sum = 0;
      for (let i = 0; i < size; i++) {
        sum += get(cellAtom(row, i));
      }
      return sum;
    },
  })
);
