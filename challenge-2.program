


var counter = 0;

function penUp(x, y){
  while( counter < x){
    right();
    counter += 1;
  }
  counter = 0;

  while(counter < y){
    down();
    counter += 1;
  }
  counter = 0;

}

function penDown(direction, steps){
  while(counter < steps){
    setColor("blue");
    direction();
    counter = counter + 1;
  }
  counter = 0;
}

function rect(x, y, width, height){
  penUp(x, y);
  penDown(right, width);
  penDown(down, height);
  penDown(left, width);
  penDown(up, height);

}

rect(10, 10, 5, 5);
