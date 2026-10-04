const r = require("raylib");
const s = require("./scanners.js")
const p = require("./particle.js")

function running() {
    return !r.WindowShouldClose();
}


function setup() {

    r.SetTraceLogLevel(r.LOG_NONE)
    const world = {};

    world.WIDTH = 710;
    world.HEIGHT = 600;
    world.TITLE = "Particle Detector"
    world.FPS = 60;

    r.SetTargetFPS(world.FPS);
    r.InitWindow(world.WIDTH, world.HEIGHT, world.TITLE,)

    world.f1 = p.creatParticle(100, 0, 20, world.HEIGHT);
    world.f2 = p.creatParticle(400, 0, 50, world.HEIGHT);
    world.f3 = p.creatParticle(0, 200, world.WIDTH, 20);

    world.s1 = s.creatScanner(0, 0, world.HEIGHT, 50, 3, false, 0, world.WIDTH / 2);
    world.s2 = s.creatScanner(world.WIDTH / 2, 0, world.HEIGHT, 50, 2, false, world.WIDTH / 2, world.WIDTH);
    world.s3 = s.creatScanner(0, 0, 30, world.WIDTH, 3, false, 0, world.HEIGHT);

    return world;

}

function update(world) {
    s.updateHorizontalDetector(world.s1, world.f1, world.f2);
    s.updateHorizontalDetector(world.s2, world.f1, world.f2);
    s.updateVerticleDetector(world.s3, world.f3);
}


function draw(world) {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    p.draw(world.f1);
    p.draw(world.f2);

    p.draw(world.f3);

    s.draw(world.s1);
    s.draw(world.s2);
    s.draw(world.s3);

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