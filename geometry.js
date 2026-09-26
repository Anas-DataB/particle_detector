
function isInRange(fram1X, fram1Width, fram2X, frame2Width) {
    return fram2X <= fram1X + fram1Width && fram1X <= fram2X + frame2Width;
}

function boundryHit(moveingX, frameWidth, leftLimit, rightLimit) {
    return (moveingX + frameWidth >= rightLimit) || (moveingX === leftLimit)
}
module.exports = {
    isInRange,
    boundryHit,
};