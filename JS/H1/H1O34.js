var aantal = 100;
var x;
var y;
var diameter;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  frameRate(8);
  //noLoop();
  strokeWeight(4);
  stroke('steelblue');
}

function draw() {
  background('white');
  for(n=0; n<70; n++){
      x = random(50,400);
      y = random(50,400);
      ellipse(x,y,random(20,60));
}
}