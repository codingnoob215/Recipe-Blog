function setup() {
  let canvas = createCanvas(320, 240);
  canvas.parent('myDrawing');
  noLoop();
}

function draw() {
  background(240, 220, 180); // crust color

  // Pizza base
  fill(255, 204, 100);
  stroke(150, 75, 0);
  strokeWeight(4);
  ellipse(width / 2, height / 2, 200, 200);

  // Sauce
  fill(200, 50, 50);
  noStroke();
  ellipse(width / 2, height / 2, 160, 160);

  // Cheese
  fill(255, 220, 100);
  ellipse(width / 2, height / 2, 150, 150);

  // Pepperoni slices
  fill(180, 40, 30);
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = width / 2 + cos(angle) * 50;
    let y = height / 2 + sin(angle) * 50;
    ellipse(x, y, 30, 30);
  }

  // Slice lines
  stroke(255);
  strokeWeight(2);
  line(width / 2, height / 2, width, height / 2);
  line(width / 2, height / 2, width / 4, height / 4);
  line(width / 2, height / 2, width / 4, 3 * height / 4);
}
