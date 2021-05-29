var s;
var scl = 50;

var food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(15);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);

}

function draw() {
    background(51);

    fill(200, 70, 70);
    rect(food.x, food.y, scl, scl);

    if(s.eat(food)){
        pickLocation();
    }

    s.death();
    s.update();
    s.show();

    if(s.total === 143){
        console.log("You Win");
    }

}

function keyPressed(){
    if(keyCode === UP_ARROW){
        s.dir(0, -1);
    } else if(keyCode === DOWN_ARROW){
        s.dir(0, 1);
    } else if(keyCode === RIGHT_ARROW){
        s.dir(1, 0);
    } else if(keyCode === LEFT_ARROW){
        s.dir(-1, 0);
    }
}

