function MovingObject() {
    pos: [r, c];
    vel: [x, y];
    radius: r;
    color: color;
}

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

module.exports = MovingObject;