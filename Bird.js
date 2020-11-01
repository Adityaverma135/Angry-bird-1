class Bird extends BaseClass {
  constructor(x,y){
    var options={
      isStatic:true
    }
    super(x,y,50,50,options);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(bird.body.position.y)
    super.display();
  }
}
