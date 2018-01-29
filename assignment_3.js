//Assignment 3: Fading Circles
//To be run in Rudy

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(180, 230), 100, 100);
  ellipse(random(width), random(height), random(20, 40));
}
