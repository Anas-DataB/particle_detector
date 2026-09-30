function creatScanner() {
    return {
        position: {
            x: 0,
            y: 0,
        },
        size: {
            width: 0,
            height: 0,
        },
        velocity: 0,
        hasDetected: false,
    }
}
const s1 = creatScanner();
const s2 = creatScanner();
const s3 = creatScanner();
// const s1 = {
//     position: {
//         x: 0,
//         y: 0,
//     },
//     size: {
//         width: 0,
//         height: 0,
//     },
//     velocity: 0,
//     hasDetected: false,
// }

// const s2 = {
//     position: {
//         x: 0,
//         y: 0,
//     },
//     size: {
//         width: 0,
//         height: 0,
//     },
//     velocity: 0,
//     hasDetected: false,
// }

// const s3 = {
//     position: {
//         x: 0,
//         y: 0,
//     },
//     size: {
//         width: 0,
//         height: 0,
//     },
//     velocity: 0,
//     hasDetected: false,
// }

module.exports = {
    s1,
    s2,
    s3,
}

