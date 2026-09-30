const r = require("raylib");
const d = require("./detect.js")
const s = require("./scanners.js")
const p = require("./particle.js")

const WIDTH = 710;
const HEIGHT = 600;
const partedX = WIDTH / 2;

function isParticleDetected(scanner, scannerWidth, particle1x, particle1Width, particle2x, particle2Width) {
    const isPar1InRange = d.isOverlap(particle1x, particle1Width, scanner, scannerWidth);
    const isPar2InRange = d.isOverlap(particle2x, particle2Width, scanner, scannerWidth);

    return isPar1InRange || isPar2InRange;
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

    s.s1.position.x = 0;
    s.s1.position.y = 0;
    s.s1.size.width = 50;
    s.s1.size.height = HEIGHT;
    s.s1.velocity = 3;
    s.s1.hasDetected = false;

    s.s2.position.x = partedX;
    s.s2.position.y = 0;
    s.s2.size.width = 50;
    s.s2.size.height = HEIGHT;
    s.s2.velocity = 2;
    s.s2.hasDetected = false;

    s.s3.position.x = 0;
    s.s3.position.y = 0;
    s.s3.size.width = WIDTH;
    s.s3.size.height = 30;
    s.s3.velocity = 3;
    s.s3.hasDetected = false;

    p.f1.position.x = 100;
    p.f1.position.y = 0;
    p.f1.size.width = 70;
    p.f1.size.height = HEIGHT;

    p.f2.position.x = 400;
    p.f2.position.y = 0;
    p.f2.size.width = 50;
    p.f2.size.height = HEIGHT;

    p.f3.position.x = 0;
    p.f3.position.y = 200;
    p.f3.size.width = WIDTH
    p.f3.size.height = 100;

}
function move(start, velocity) {
    return start + velocity
}
function update() {

    s.s1.position.x = move(s.s1.position.x, s.s1.velocity)
    s.s2.position.x = move(s.s2.position.x, s.s2.velocity);

    s.s3.position.y = move(s.s3.position.y, s.s3.velocity);

    s.s1.velocity = d.setVelocity(s.s1.position.x, s.s1.size.width, 0, partedX, s.s1.velocity)
    s.s2.velocity = d.setVelocity(s.s2.position.x, s.s2.size.width, partedX, WIDTH, s.s2.velocity)

    s.s3.velocity = d.setVelocity(s.s3.position.y, s.s3.size.height, 0, HEIGHT, s.s3.velocity)

    s.s3.hasDetected = d.isOverlap(s.s3.position.y, s.s3.size.height, p.f3.position.y, p.f3.size.height);
    s.s2.hasDetected = isParticleDetected(s.s2.position.x, s.s2.size.width, p.f1.position.x, p.f1.size.width, p.f2.position.x, p.f2.size.width);
    s.s1.hasDetected = isParticleDetected(s.s1.position.x, s.s1.size.width, p.f1.position.x, p.f1.size.width, p.f2.position.x, p.f2.size.width);

}
function drawScanner(x, y, width, height, isdetected) {

    isdetected ? r.DrawRectangle(x, y, width, height, r.ColorAlpha(r.RED, 0.7)) : r.DrawRectangle(x, y, width, height, r.WHITE);
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(p.f1.position.x, p.f1.position.y, p.f1.size.width, p.f1.size.height, r.BLUE)
    r.DrawRectangle(p.f2.position.x, p.f2.position.y, p.f2.size.width, p.f2.size.height, r.BLUE)

    r.DrawRectangle(p.f3.position.x, p.f3.position.y, p.f3.size.width, p.f3.size.height, r.BLUE)


    drawScanner(s.s1.position.x, s.s1.position.y, s.s1.size.width, s.s1.size.height, s.s1.hasDetected);
    drawScanner(s.s2.position.x, s.s2.position.y, s.s2.size.width, s.s2.size.height, s.s2.hasDetected)


    drawScanner(s.s3.position.x, s.s3.position.y, s.s3.size.width, s.s3.size.height, s.s3.hasDetected)

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