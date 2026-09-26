const r = require("raylib");
const g = require("./geometry")

const TITLE = "Particle Detector"
const WIDTH = 701;
const HEIGHT = 600;
const FPS = 60;

let scannerX = 0;
const scannerY = 0;
const scannerWidth = 50;
const scannerHeight = HEIGHT;
let scannerSpeed = 3;

const parFieldX = 200;
const parFieldY = 0;
const parFieldWidth = 100;
const parFieldHeight = HEIGHT;


function isOverlape() {

    const isParRange = g.isInBoundary(parFieldX, scannerX, scannerWidth);
    const isScannerRange = g.isInBoundary(scannerX, parFieldX, parFieldWidth);

    return isParRange && isScannerRange;
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

    if ((scannerX + scannerWidth === WIDTH) || (scannerX === 0)) {
        scannerSpeed = -scannerSpeed;
    }
}

function draw() {
    const scannerColor = isOverlape() ? r.RED : r.WHITE;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(parFieldX, parFieldY, parFieldWidth, parFieldHeight, r.BLUE)
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