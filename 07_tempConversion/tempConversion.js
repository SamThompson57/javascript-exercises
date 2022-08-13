const ftoc = function(f) {
  let ans = ((f -32) * (5/9));
  return Number(ans.toFixed(1));
};

const ctof = function(c) {
  let ans = ((c * (9/5)) + 32);
  return Number(ans.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
