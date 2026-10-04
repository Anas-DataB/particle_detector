function isInRange(x, boundry) {
    return x <= boundry;
}
function isOverlap(scannerX, scannerWidth, feildX, feildWidth) {
    const scannerBound = scannerX + scannerWidth;
    const feildBound = feildX + feildWidth;

    return isInRange(scannerX, feildBound) && isInRange(feildX, scannerBound);
}

function boundryHit(frameX, frameWidth, start, upperBound) {
    const frameEnd = frameX + frameWidth;
    return isInRange(upperBound, frameEnd) || isInRange(frameX, start)
}

function setVelocity(scanner, scannerWidth, start, end, velocity) {
    return boundryHit(scanner, scannerWidth, start, end) ? -velocity : velocity;
}

function isParticlesDetected(scanner, feild1, feild2) {
    const hasField1Detected = isOverlap(scanner.x, scanner.width, feild1.x, feild1.width);
    const hasField2Detected = isOverlap(scanner.x, scanner.width, feild2.x, feild2.width);

    return hasField1Detected || hasField2Detected;
}
function move(start, velocity) {
    return start + velocity
}

module.exports = {
    boundryHit,
    isOverlap,
    setVelocity,
    isParticlesDetected,
    move,
};