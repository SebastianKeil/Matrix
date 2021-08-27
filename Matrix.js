class Matrix{
  
  constructor (x, y){
    this.x = x;
    this.y = y;
    this.scaleX = width / this.x;
    this.scaleY = height / this.y;
    this.pix = new Array();
  }
  
  
  
  
  setPixel(num, r, g, b, a){
    this.pix[num * 4 + 0] = r;
    this.pix[num * 4 + 1] = g;
    this.pix[num * 4 + 2] = b;
    this.pix[num * 4 + 3] = a;
  }

  setPixel(num, r, g, b){
    this.pix[num * 4 + 0] = r;
    this.pix[num * 4 + 1] = g;
    this.pix[num * 4 + 2] = b;
    this.pix[num * 4 + 3] = 255;
  }
  
  show(){
    for(let i = 0; i < this.pix.length / 4; i++){
      
      let y = floor(i / this.x) * this.scaleY;
      let x = (i - floor(i / this.x) * this.x) * this.scaleX;
      
      stroke(250);
      strokeWeight(5);
      fill(this.pix[i * 4], this.pix[i * 4 + 1], this.pix[i * 4 + 2], this.pix[i * 4 + 3]);
      rect(x, y, this.scaleX, this.scaleY);
      
    }
  }
  
}