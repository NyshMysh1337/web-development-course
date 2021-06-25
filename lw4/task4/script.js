String.prototype.countCoincidence = function (substring) {
  let str = this;

  str = str.toLowerCase();
  substring = substring.toLowerCase();

  return str.split(substring).length - 1;
};