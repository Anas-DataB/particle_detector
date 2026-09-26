const r = require("raylib");

const TITLE = "Particle Detector"
const WIDTH = 701;
const HEIGHT = 600;
const FPS = 60;

let rectX = 0;
const rectY = 0;
const rectWidth = 20;
const rectHeight = WIDTH;
let rectSpeed = 3;

const partFieldX = 200;
const partFieldY = 0;
const partFieldWidth = 50;
const partFieldHeight = HEIGHT;


function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, TITLE,)
    r.SetTargetFPS(FPS)
}

function update() {

    rectX += rectSpeed;

    if ((rectX + rectWidth === WIDTH) || (rectX === 0)) {
        rectSpeed = -rectSpeed;
    }
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(partFieldX, partFieldY, partFieldWidth, partFieldHeight, r.BLUE)
    r.DrawRectangle(rectX, rectY, rectWidth, rectHeight, r.WHITE)

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