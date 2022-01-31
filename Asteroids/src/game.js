function Game(options) {
    
}

Game.DIM_X = 1000;
Game.DIM_Y = 600; 
Game.NUM_ASTEROIDS = 25;

// Game.prototype.add() = function

Game.prototype.randomPosition = function randomPosition() {
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random(),
    ]
}