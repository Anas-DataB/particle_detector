const r = require("raylib");
const g = require("./geometry")

const TITLE = "Particle Detector"
const WIDTH = 710;
const HEIGHT = 600;
const FPS = 60;
const partedX = WIDTH / 2;

const vParticle1Y = 200;

let vScanner1Y = 0;
let vScannerSpeed = 3;
const vScanner1Height = 30;


let scanner1X = 0;
let scanner1Speed = 1;

let scanner2X = partedX;
let scanner2Speed = 3;

const scanner1Width = 50;
const scanner2Width = 50;

function setColor(isdetected) {
    return isdetected ? r.ColorAlpha(r.RED, 0.7) : r.WHITE;
}

function setSpeed(scannerX, scannerWidth, leftLimit, rightLimit, speed) {
    return g.boundryHit(scannerX, scannerWidth, leftLimit, rightLimit) ? -speed : speed;
}

function isOverlap(scanner, scannerWidth, particle1x, particle1Width, particle2x, particle2Width) {

    const isPar1InRange = g.isInRange(particle1x, particle1Width, scanner, scannerWidth);
    const isPar2InRange = g.isInRange(particle2x, particle2Width, scanner, scannerWidth);

    return isPar1InRange || isPar2InRange;

}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, TITLE,)
    r.SetTargetFPS(FPS)
}

function update() {

    scanner1X += scanner1Speed;
    scanner2X += scanner2Speed;

    vScanner1Y += vScannerSpeed;

    scanner1Speed = setSpeed(scanner1X, scanner1Width, 0, partedX, scanner1Speed)
    scanner2Speed = setSpeed(scanner2X, scanner2Width, partedX, WIDTH, scanner2Speed)

    vScannerSpeed = setSpeed(vScanner1Y, vScanner1Height, 0, HEIGHT, vScannerSpeed)

}

function draw() {
    const scanner1Y = 0;
    const scanner1Height = HEIGHT;

    const scanner2Y = 0;
    const scanner2Height = HEIGHT;

    const particle1X = 100;
    const particle1Y = 0;
    const particle1Width = 70;
    const particle1Height = HEIGHT;

    const particle2X = 250;
    const particle2Y = 0;
    const particle2Width = 50;
    const particle2Height = HEIGHT;

    const vScanner1X = 0;
    const vScanner1Width = WIDTH;

    const vParticle1X = 0;
    const vParticle1Width = WIDTH;
    const vParticle1Height = 100;

    const isScanner1Detect = isOverlap(scanner1X, scanner1Width, particle1X, particle1Width, particle2X, particle2Width);
    const isScanner2Detect = isOverlap(scanner2X, scanner2Width, particle1X, particle1Width, particle2X, particle2Width);

    const vScannerDetect = isOverlap(vScanner1Y, vScanner1Height, vParticle1Y, vParticle1Height);

    const scanner1Color = setColor(isScanner1Detect)
    const scanner2Color = setColor(isScanner2Detect)
    const vScanner1Color = setColor(vScannerDetect)

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(particle1X, particle1Y, particle1Width, particle1Height, r.BLUE)
    r.DrawRectangle(particle2X, particle2Y, particle2Width, particle2Height, r.BLUE)

    r.DrawRectangle(vParticle1X, vParticle1Y, vParticle1Width, vParticle1Height, r.BLUE)


    r.DrawRectangle(scanner1X, scanner1Y, scanner1Width, scanner1Height, scanner1Color);
    r.DrawRectangle(scanner2X, scanner2Y, scanner2Width, scanner2Height, scanner2Color)


    r.DrawRectangle(vScanner1X, vScanner1Y, vScanner1Width, vScanner1Height, vScanner1Color)

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