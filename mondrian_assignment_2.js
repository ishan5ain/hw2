//Mondrian but different
//To be run on p5js.zamfi.net

function setup() {
	colorMode(HSB, 360, 100, 100, 100);
  createCanvas(360, 360);
	background(0, 0, 100);

}

function draw() {
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

var x;
var y;

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

fill(240, 100, 100, 70);

//blue sqr 1
x = 30;
y = 30;

beginShape(QUADS);
vertex(x, y);
vertex(x+80, y);
vertex(x+80, y+80);
vertex(x, y+80);
endShape();

//blue sqr 2
x = 130;
y = 230;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+40);
vertex(x, y+40);
endShape();

//blue rect 3
x = 180;
y = 160;

beginShape(QUADS);
vertex(x, y);
vertex(x+40, y);
vertex(x+40, y+80);
vertex(x, y+80);
endShape();

//Blue sqr 4
x = 260;
y = 300;

beginShape(QUADS);
vertex(x, y);
vertex(x+60, y);
vertex(x+60, y+40);
vertex(x, y+40);
endShape();

fill(55, 100, 100, 50);

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
x = 190;
y = 150;

beginShape(QUADS);
vertex(x, y);
vertex(x+120, y);
vertex(x+120, y+120);
vertex(x, y+120);
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

fill(0, 100, 100, 70);

//red rect 1
x = 20;
y = 180;

beginShape(QUADS);
vertex(x, y);
vertex(x+160, y);
vertex(x+160, y+40);
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
x = 190;
y = 230;

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

noFill();
}

// var counter = 0;
//
// function border(direction){
//   while(counter < 10){
//     setColor("blue");
//     direction();
//     counter = counter + 1;
//   }
//
//   counter = 0;
// }
//
// border(down);
// border(right);
// border(up);
// border(left);
