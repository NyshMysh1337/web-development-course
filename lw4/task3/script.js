Array.prototype.forEachRight = function (handler) {
  let array = this;
  for (var i = array.length - 1; i != -1; i--) {
    handler(array[i], i, array);
  }
}