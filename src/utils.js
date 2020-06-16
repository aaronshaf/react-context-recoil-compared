export function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function () {
    var args = slice.call(arguments);

    if (args in memo) return memo[args];
    else return (memo[args] = func.apply(this, args));
  };
}

export function color(x, y) {
  return lightenColor(Math.floor(Math.random() * 16777215).toString(16), 20);
}

export function lightenColor(color, percent) {
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  return (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1);
}
