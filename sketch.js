var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var object;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var option,option2;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var option={
		isStatic:true
	  }

	  var option2={

		 restitution:0.0,
		 isStatic:true

	  }


	  object = Bodies.rectangle(270,440,200,20,option)
	  World.add(world,object)


	  

		starBody = Bodies.circle(650 , 30 , 5 ,option);
		World.add(world, starBody);
	 
	
	 
	


	
		Engine.run(engine)

}


function draw() {
  background(bgImg);

  Engine.update(engine);

  
star.x=starBody.position.x;
star.y=starBody.position.y;


  
  
  ellipse(starBody.position.x,starBody.position.y,20,20);

  if(starBody.position.y>470){

	starBody = Bodies.circle(object.position.x, object.position.y , 5 ,option2);
		World.add(world, starBody);

		
  }

  
  keyPressed();

  

  drawSprites();

}

function keyPressed() {

	
	//write code here
	if(keyDown("right_arrow")){

		fairy.x = fairy.x+10;
		object.position.x = object.position.x+10;
	}
	
	if(keyDown("left_arrow")){
	
		fairy.x = fairy.x-10;
		object.position.x = object.position.x-10;
	}

	if(keyDown("down_arrow")){

		starBody = Bodies.circle(650 , 30 , 5 ,option2);
		World.add(world, starBody);
	}
	

	
}
