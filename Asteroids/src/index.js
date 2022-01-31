const MovingObject = require("./moving_object.js");

document.addEventListener('DOMContentLoaded', function(){
    const c = document.getElementById("game-canvas");
    const ctx = c.getContext("2d");
    // const mo = new MovingObject();
    // mo.drawCircle(ctx);
    window.ctx = ctx;
});

window.MovingObject = MovingObject;


