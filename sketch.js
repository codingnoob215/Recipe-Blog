function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('myDrawing');
  
}

function draw() {
  background(240, 220, 180); // background

  // Pizza Crust
  fill(255, 204, 120);
  stroke(150, 75, 0);
  strokeWeight(6);
  ellipse(250, 250, 380, 380); 

  // Sauce
  noStroke();
  fill(200, 60, 40);
  ellipse(250, 250, 320, 320);

  // Cheese
  fill(255, 220, 90);
  ellipse(250, 250, 300, 300);

  // Pepperoni 
  fill(180, 40, 30);
  ellipse(250, 180, 45, 45);
  ellipse(310, 250, 45, 45);
  ellipse(190, 250, 45, 45);
  ellipse(250, 320, 45, 45);
  ellipse(180, 200, 45, 45);
  ellipse(330, 300, 45, 45);
  ellipse(200, 330, 45, 45);

  // Slice lines
  stroke(255);
  strokeWeight(3);
  line(250, 250, 420, 250);
  line(250, 250, 330, 120);
  line(250, 250, 330, 380);
}


