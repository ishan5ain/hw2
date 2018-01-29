//To be run in Rudy

colorMode(HSB);
stroke(0, 0, 0);
strokeWeight(2);

beginShape();
vertex(0, 0);
vertex(width, 0);
vertex(width, height);
vertex(0, height);
endShape(CLOSE);

beginShape(LINES);
vertex(40, 0);
vertex(40, height);
vertex(120, 0);
vertex(120, height);
vertex(160, 0);
vertex(160, height);
vertex(200, 0);
vertex(200, height);
vertex(240, 0);
vertex(240, height);
vertex(280, 0);
vertex(280, height);
vertex(320, 0);
vertex(320, height);

vertex(0, 40);
vertex(width, 40);
vertex(0, 120);
vertex(width, 120);
vertex(0, 160);
vertex(width, 160);
vertex(0, 240);
vertex(width, 240);
vertex(0, 280);
vertex(width, 280);
vertex(0, 320);
vertex(width, 320);
endShape();

var x = 40;
var y = 40;

fill(240, 100, 100);

//blue sqr 1
beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+80);
vertex(x, y+80);
endShape();

//blue sqr 2
x = 120;
y = 240;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+40);
vertex(x, y+40);
endShape();

//blue rect 3
x = 160;
y = 160;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+80);
vertex(x, y+80);
endShape();

//Blue sqr 4
x = 280;
y = 280;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+40);
vertex(x, y+40);
endShape();

fill(55, 100, 100);

//yellow rect 1
x = 40;
y = 280;

beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+40);
vertex(x, y+40);
endShape();

//yellow sqr 2
x = 200;
y = 160;

beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+80);
vertex(x, y+80);
endShape();

//yellow rect 3
x = 280;
y = 40;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+80);
vertex(x, y+80);
endShape();

fill(0, 100, 100);

//red rect 1
x = 40;
y = 200;

beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+40);
vertex(x, y+40);
endShape();

//red sqr 2
x = 160;
y = 80;

beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+80);
vertex(x, y+80);
endShape();

//red rect 3
x = 200;
y = 240;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+80);
vertex(x, y+80);
endShape();



fill(0, 0, 0);

//black rect 1
x = 40;
y = 120;

beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+40);
vertex(x, y+40);
endShape();

//black rect 2
x = 160;
y = 280;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+40);
vertex(x, y+40);
endShape();

//black rect 3
x = 200;
y = 0;

beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+40);
vertex(x, y+40);
endShape();

fill(0, 0, 100);

//white rect 1
x = 160;
y = 40;

beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+40);
vertex(x, y+40);
endShape();

//white rect 2
x = 240;
y = 240;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+80);
vertex(x, y+80);
endShape();

noFill();
