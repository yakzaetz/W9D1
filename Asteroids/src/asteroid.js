const Util = require("./util");
const MovingObject = require("./moving_object");
Util.inherits(Asteroid, MovingObject);

const defaults = {color:"grey" , radius:25}

function Asteroid(options) { 
    MovingObject.call(this, {
        color: defaults["color"], 
        radius: defaults["radius"],
        pos: options["pos"],
        vel: Util.randomVec(4)
    });

}

module.exports = Asteroid;