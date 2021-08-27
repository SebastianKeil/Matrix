function setup() {
  createCanvas(500, 1000);
  strip = new Matrix(15, 30);
  
}



function draw() {
  background(250);
  
  for( let i = 0; i < 450; i++){
    strip.setPixel(i , random(0, 255), random(0, 255), i/2);
  }
  //strip.setPixel(50 , 150, 100, 2);
  
  strip.show();
  
  //noLoop();
}

