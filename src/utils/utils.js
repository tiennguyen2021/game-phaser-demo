export function getFileName(fileName) {
    return fileName.split(".")[0];
}
export function getExtension(fileName) {
    return fileName.split(".")[1];
}

export function createCircle(scene, radius) {
    const graphics = scene.make.graphics();

    graphics.fillStyle(0xffffff);
    graphics.beginPath();
    graphics.arc(0, 0, 300, radius, 0, Math.PI * 2);
    graphics.fillPath();
    return graphics;
}
