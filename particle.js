const r = require("raylib")

function creatParticle(x, y, width, height) {
    return {
        x, y, width, height
    }
}

function draw(paricle) {

    r.DrawRectangle(paricle.x, paricle.y, paricle.width, paricle.height, r.BLUE);
}
module.exports = {
    creatParticle,
    draw,
}