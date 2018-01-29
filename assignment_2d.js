//Assignment 2d: stroke color of each line depends on its start point's x coordinate
//To be run in Rudy

function draw(){
  // Calculating the random x-coordinate first and storing it in variable x
  var x = random(width);

  //mapping the variable x from 0 ~ width to 0 ~ 255 for color values
  var xColor = map(x, 0, width, 0, 255);

  //this stroke expression gives red color with higher values of x and black for lower values of x
  stroke(xColor, 0, 0);

  line(x, random(height), width, 0);
}
