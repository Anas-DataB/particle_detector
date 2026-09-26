function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}


function isInBoundary(boundary, framX, framWidth) {
    return boundary <= framX + framWidth;
}

module.exports = {
    calcOffset,
    isInBoundary,
};