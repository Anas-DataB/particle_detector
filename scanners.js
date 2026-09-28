const WIDTH = 710;
const HEIGHT = 600;
const partedX = WIDTH / 2;

let scanner1X = 0;
const scanner1Y = 0;
const scanner1Width = 50;
const scanner1Height = HEIGHT;
let scanner1Velocity = 1;



let scanner2X = partedX;
const scanner2Y = 0;
const scanner2Width = 50;
const scanner2Height = HEIGHT;
let scanner2Velocity = 3;


const vScannerX = 0;
let vScannerY = 0;
const vScannerWidth = WIDTH;
const vScannerHeight = 30;
let vScannerVelocity = 3;

let isvScannerDetect;
let isScanner2Detect;
let isScanner1Detect;

module.exports = {
    scanner1X,
    scanner1Y,
    scanner1Width,
    scanner1Height,
    scanner1Velocity,
    scanner2X,
    scanner2Y,
    scanner2Width,
    scanner2Height,
    scanner2Velocity,
    vScannerX,
    vScannerY,
    vScannerWidth,
    vScannerHeight,
    vScannerVelocity,
    isvScannerDetect,
    isScanner2Detect,
    isScanner1Detect,
}

