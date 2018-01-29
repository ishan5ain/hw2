//Assignment 3: Challenge
//To be run in Rudy

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(10, 40), 100, 100);
  var x = random(width);
  var y = random(height);

  // beginShape(TRIANGLES);
  // vertex(x, y);
  // vertex(x+random(5, 20), y-random(10, 50));
  // vertex(x=random(20, 40), y);
  // endShape();

  beginShape(TRIANGLES);
  vertex(x, y);
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  endShape();
}
