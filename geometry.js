function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}


function isInRange(fram1X, fram1Width, fram2X, frame2Width) {
    return fram2X <= fram1X + fram1Width && fram1X <= fram2X + frame2Width;
}

module.exports = {
    calcOffset,
    isInRange,
};