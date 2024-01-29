function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200);
  fill(255,0,0);
  ellipse(50,50,80,80);

  
  
  // middle circle red
  fill(225,0,0);
 ellipse(250,210,80,80);
// 
   fill(0);
  ellipse(50,50,40,40);

  // black middle circle
  fill(0);
  ellipse(250,210,40,40);

  
//bottom line
    line(200,250,300,250)
// left line
  line(200,250,200,170)
// top line
  line(200,170,300,170)
// right line
  line(300,250,300,170)
  
  //rectangle
  fill(0,0,225)
  rect(320, 20, 55, 55)
  
 fill(0,225,0)
  triangle(314, 355, 342, 300, 370, 355)  
  
   fill(160, 32, 240)
  rect(450, 50, 100, 75);
  
  strokeWeight(3);
line(90, 120, 20, 120);
  
  arc(50, 170, 80, 80, 0, PI + QUARTER_PI, PIE);
  
  point(60, 130);
point(85, 130);
  point(60, 150);
point(85, 150);

 

 
}
