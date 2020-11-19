function setup() {
  createCanvas(800,400);



  box1 = new Block(330,235,30,40);
  box2 = new Block(360,235,30,40);
  box3 = new Block(390,235,30,40);
  box4 = new Block(420,235,30,40);
  box5 = new Block(450,235,30,40);
  

  box6 = new Block(420,195,30,40);
  box7 = new Block(450,195,30,40);
  box8 = new Block(450,195,30,40);

  box9 = new Block(480,155,30,40);

  ground = new block(330,245,110,15);

  
  
}

function draw() {
  background(0);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();  
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x : mouseX , y : mouseY})
  }
  function mouseReleased(){
      sling2.fly();
  }
