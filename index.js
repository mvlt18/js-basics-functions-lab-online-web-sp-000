// Code your solution in this file!
function distanceFromHqInBlocks (value) {
  if (value > 42) {
    return value - 42;
  } else {
    return 42 - value;
  }
}

function distanceFromHqInFeet (value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet( startingBlock, endingBlock ) {
  if (startingBlock < endingBlock) {
    return (endingBlock - startingBlock) * 264;
  } else {
    return (startingBlock - endingBlock) * 264;
  }
}

function calculatesFarePrice(startingBlock, endingBlock) {

  const distance = distanceTravelledInFeet(startingBlock, endingBlock);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
