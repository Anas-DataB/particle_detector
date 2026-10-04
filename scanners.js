const r = require("raylib");
const g = require("./geometry")

function creatScanner(x, y, height, width, velocity, hasDetected, lower, upper) {
    return {
        x, y, height, width, velocity, hasDetected, lower, upper
    }
}
function draw(detector) {
    const color = detector.hasDetected ? r.RED : r.WHITE
    r.DrawRectangle(detector.x, detector.y, detector.width, detector.height, color);
}

function updateVerticleDetector(d, f) {
    d.y = g.move(d.y, d.velocity)
    d.velocity = g.setVelocity(d.y, d.height, d.lower, d.upper, d.velocity)
    d.hasDetected = g.isOverlap(d.y, d.height, f.y, f.height);
}

function updateHorizontalDetector(d, f1, f2) {

    d.x = g.move(d.x, d.velocity)
    d.velocity = g.setVelocity(d.x, d.width, d.lower, d.upper, d.velocity)
    d.hasDetected = g.isParticlesDetected(d, f1, f2);
}

module.exports = {
    creatScanner,
    draw,
    updateVerticleDetector,
    updateHorizontalDetector
}

