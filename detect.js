function isInRange(x, boundry) {
    return x <= boundry;
}
function isOverlap(fram1X, fram1Width, fram2X, frame2Width) {
    const f1Bound = fram1X + fram1Width;
    const f2Bound = fram2X + frame2Width;

    return isInRange(fram1X, f2Bound) && isInRange(fram2X, f1Bound);
}

function boundryHit(frameX, frameWidth, start, upperBound) {
    const frameEnd = frameX + frameWidth;
    return isInRange(upperBound, frameEnd) || isInRange(frameX, start)
}

function setVelocity(scanner, scannerWidth, start, end, velocity) {
    return boundryHit(scanner, scannerWidth, start, end) ? -velocity : velocity;
}
module.exports = {
    boundryHit,
    isOverlap,
    setVelocity,
};