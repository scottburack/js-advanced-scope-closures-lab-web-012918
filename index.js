
function produceDrivingRange(dist) {

  return function (block1, block2) {
    let blocks = parseInt(block1.split(-2)[0]) - parseInt(block2.split(-2)[0])
    let newBlocks = Math.abs(blocks)
    if (dist >= newBlocks) {
      return `within range by ${dist - newBlocks}`
    } else {
      return `${newBlocks - dist} blocks out of range`
    }
  }
}

const produceTipCalculator = function (percent) {

  return function (price) {
    return price * percent
  }
}
