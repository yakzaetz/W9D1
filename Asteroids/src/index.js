const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js")


document.addEventListener('DOMContentLoaded', function(){
    const c = document.getElementById("game-canvas");
    const ctx = c.getContext("2d");
    
    window.ctx = ctx;
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;


