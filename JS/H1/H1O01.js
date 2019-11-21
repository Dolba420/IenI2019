function setup() {
  canvas = createCanvas(450,450);
  background('gray');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
    noStroke();
    fill('green')
  ellipse(225,225,425);
  // witte rechthoek met rode rand
  
  
  noStroke();
  fill('white')
  ellipse(225,225,300);


  stroke('green');
  strokeWeight(10); 
  rect(125,125,200,200);
}
