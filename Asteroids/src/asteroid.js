const Util = require("./util");

function Asteroid(options) {
    this.color = MoveObject.color;
    this.radius = options["radius"];
}

Util.inherits(this, MovingObject);