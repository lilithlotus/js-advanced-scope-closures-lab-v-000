function produceDrivingRange(blockRange) {
  let blocks = 0;
  return function(start, end) {
    if(start > end) {
      blocks = parseInt(start) - parseInt(end);
    } else {
      blocks = parseInt(end) - parseInt(start);
    }
    if(blockRange < blocks) {
      return `${blocks - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - blocks}`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(price) {
    return price * percent;
  }
}
