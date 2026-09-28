const r = require("raylib");
const d = require("./detect.js")
const s = require("./scanners.js")
const p = require("./particle.js")

const WIDTH = 710;
const HEIGHT = 600;
const partedX = WIDTH / 2;

let colorScanner1 = r.WHITE;
let colorScanner2 = r.WHITE;
let color_vScanner = r.WHITE;

function isParticleDetected(scanner, scannerWidth, particle1x, particle1Width, particle2x, particle2Width) {
    const isPar1InRange = d.isOverlap(particle1x, particle1Width, scanner, scannerWidth);
    const isPar2InRange = d.isOverlap(particle2x, particle2Width, scanner, scannerWidth);

    return isPar1InRange || isPar2InRange;
}

function setColor(isdetected) {
    return isdetected ? r.ColorAlpha(r.RED, 0.7) : r.WHITE;
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {

    const TITLE = "Particle Detector"
    const FPS = 60;
    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(WIDTH, HEIGHT, TITLE,)
    r.SetTargetFPS(FPS)
}
function move(start, velocity) {
    return start + velocity
}
function update() {

    s.scanner1X = move(s.scanner1X, s.scanner1Velocity)
    s.scanner2X = move(s.scanner2X, s.scanner2Velocity);

    s.vScannerY = move(s.vScannerY, s.vScannerVelocity);

    s.scanner1Velocity = d.setVelocity(s.scanner1X, s.scanner1Width, 0, partedX, s.scanner1Velocity)
    s.scanner2Velocity = d.setVelocity(s.scanner2X, s.scanner2Width, partedX, WIDTH, s.scanner2Velocity)

    s.vScannerVelocity = d.setVelocity(s.vScannerY, s.vScannerHeight, 0, HEIGHT, s.vScannerVelocity)

    s.isvScannerDetect = d.isOverlap(s.vScannerY, s.vScannerHeight, p.vParticleY, p.vParticleHeight);
    s.isScanner2Detect = isParticleDetected(s.scanner2X, s.scanner2Width, p.particle1X, p.particle1Width, p.particle2X, p.particle2Width);
    s.isScanner1Detect = isParticleDetected(s.scanner1X, s.scanner1Width, p.particle1X, p.particle1Width, p.particle2X, p.particle2Width);

}
function drawScanner(x, y, width, height, isdetected) {
    if (isdetected) {
        r.DrawRectangleRounded(r.Rectangle(x, y, width, height), 20, 4, r.RED,);
    }
    else {
        r.DrawRectangle(x, y, width, height, r.ColorAlpha(r.RED, 0.7))
    }
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(p.particle1X, p.particle1Y, p.particle1Width, p.particle1Height, r.BLUE)
    r.DrawRectangle(p.particle2X, p.particle2Y, p.particle2Width, p.particle2Height, r.BLUE)

    r.DrawRectangle(p.vParticleX, p.vParticleY, p.vParticleWidth, p.vParticleHeight, r.BLUE)


    drawScanner(s.scanner1X, s.scanner1Y, s.scanner1Width, s.scanner1Height, s.isScanner1Detect);
    drawScanner(s.scanner2X, s.scanner2Y, s.scanner2Width, s.scanner2Height, s.isScanner2Detect)


    drawScanner(s.vScannerX, s.vScannerY, s.vScannerWidth, s.vScannerHeight, s.isvScannerDetect)

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};