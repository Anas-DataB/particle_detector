const r = require("raylib");
const g = require("./geometry")

const TITLE = "Particle Detector"
const WIDTH = 710;
const HEIGHT = 600;
const FPS = 30;

let scannerX = 0;
const scannerY = 0;
const scannerWidth = 50;
const scannerHeight = HEIGHT;
let scannerSpeed = 3;

const particle1X = 400;
const particle1Y = 0;
const particle1Width = 100;
const particle1Height = HEIGHT;

const particle2X = 100;
const particle2Y = 0;
const particle2Width = 50;
const particle2Height = HEIGHT;


function isOverlap() {

    const isPar1InRange = g.isInRange(particle1X, particle1Width, scannerX, scannerWidth);
    const isPar2InRange = g.isInRange(particle2X, particle2Width, scannerX, scannerWidth);

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

    scannerX += scannerSpeed;

    if ((scannerX + scannerWidth >= WIDTH) || (scannerX === 0)) {
        scannerSpeed = -scannerSpeed;
    }

}

function draw() {

    const scannerColor = isOverlap() ? r.RED : r.WHITE;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(particle1X, particle1Y, particle1Width, particle1Height, r.BLUE)
    r.DrawRectangle(particle2X, particle2Y, particle2Width, particle2Height, r.BLUE)

    r.DrawRectangle(scannerX, scannerY, scannerWidth, scannerHeight, scannerColor)

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