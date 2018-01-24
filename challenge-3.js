var counter = 0;
var toggle = 0;

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
  var hCounter = 0;
  penUp(x, y);

  while(hCounter < height){

    if(toggle == 0){
  		penDown(right, width);
  		down(); left();
    	toggle = 1;
      hCounter = hCounter + 1;
  	} else {
  		penDown(left, width);
  		down(); right();
    	toggle = 0;
      hCounter = hCounter + 1;
  	}

  }
  hCounter = 0;

  //penDown(right, width);
  //penDown(down, height);
  //penDown(left, width);
  //penDown(up, height);

}

rect(10, 10, 2, 2);
