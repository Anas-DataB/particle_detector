const r = require("raylib");
const d = require("./detect.js")
const s = require("./scanners.js")
const p = require("./particle.js")

const WIDTH = 710;
const HEIGHT = 600;
const partedX = WIDTH / 2;

let colorScanner1 = r.WHITEl;
let colorScanner2 = r.WHITEl;
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

function update() {

    s.scanner1X += s.scanner1Velocity;
    s.scanner2X += s.scanner2Velocity;

    s.vScannerY += s.vScannerVelocity;

    s.scanner1Velocity = d.setVelocity(s.scanner1X, s.scanner1Width, 0, partedX, s.scanner1Velocity)
    s.scanner2Velocity = d.setVelocity(s.scanner2X, s.scanner2Width, partedX, WIDTH, s.scanner2Velocity)

    s.vScannerVelocity = d.setVelocity(s.vScannerY, s.vScannerHeight, 0, HEIGHT, s.vScannerVelocity)

    const isScanner1Detect = isParticleDetected(s.scanner1X, s.scanner1Width, p.particle1X, p.particle1Width, p.particle2X, p.particle2Width);
    const isScanner2Detect = isParticleDetected(s.scanner2X, s.scanner2Width, p.particle1X, p.particle1Width, p.particle2X, p.particle2Width);

    const vScannerDetect = d.isOverlap(s.vScannerY, s.vScannerHeight, p.vParticleY, p.vParticleHeight);

    colorScanner1 = setColor(isScanner1Detect)
    colorScanner2 = setColor(isScanner2Detect)
    color_vScanner = setColor(vScannerDetect);

}
function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(p.particle1X, p.particle1Y, p.particle1Width, p.particle1Height, r.BLUE)
    r.DrawRectangle(p.particle2X, p.particle2Y, p.particle2Width, p.particle2Height, r.BLUE)

    r.DrawRectangle(p.vParticleX, p.vParticleY, p.vParticleWidth, p.vParticleHeight, r.BLUE)


    r.DrawRectangle(s.scanner1X, s.scanner1Y, s.scanner1Width, s.scanner1Height, colorScanner1);
    r.DrawRectangle(s.scanner2X, s.scanner2Y, s.scanner2Width, s.scanner2Height, colorScanner2)


    r.DrawRectangle(s.vScannerX, s.vScannerY, s.vScannerWidth, s.vScannerHeight, color_vScanner)

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