function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {  
    stroke ("pink")
    fill ("red")
    
   // console.log(mouseIsPressed);
    
    if(mouseIsPressed)
    rect(mouseX, mouseY, 28, 35)
   }