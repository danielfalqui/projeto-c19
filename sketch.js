var towerImg,tower;
var ghostImg,ghost;
var coinImg,coin,coinGroup;
var coins = 0;

var gameState = "play";

function preload(){
 towerImg = loadImage("tower.png");
 ghostImg = loadImage("ghost-standing.png");
 coinImg = loadImage("coin.png");
}

function setup() {
 createCanvas(600, 600);

 coinGroup = new Group();

 tower = createSprite(300,300);
 tower.addImage("tower",towerImg);
 tower.velocityY = 1;

 ghost = createSprite(200,200,50,50);
 ghost.scale = 0.5
 ghost.addImage("ghost",ghostImg);

}

function draw() {
    textSize(15);
    text("money: "+ coins, 300,50);
    if(gameState === "play"){

   

    if(tower.y > 400){
        tower.y = 300
          }
    if(keyDown("LEFT_ARROW")){
     ghost.x = ghost.x-3;
     }
    if(keyDown("RIGHT_ARROW")){
     ghost.x = ghost.x+3;
     }
    if(keyDown("SPACE")){
     ghost.velocityY = -12;
          }      
    ghost.velocityY = ghost.velocityY+0.8;

    if(coinGroup.isTouching(ghost)){
        coins + 1;
        coinGroup.destroyEach();
      }

    spawnCoins();

   
    }

 if(ghost.y > 600){
    ghost.destroy();
    gameState = "end";
  }
 drawSprites();
 if(gameState === "end"){
    background("black");
    textSize(30);
    stroke("green");
    fill("red");
    text("bye bye friend", 200, 200);
  }
 }
function spawnCoins(){
    if(frameCount % 240 === 0)
    {
    coin = createSprite(200,-50,10,10);
    coin.x = Math.round(random(120,400));
    coin.scale = 0.1;
    coin.velocityY = 2;
    coin.addImage(coinImg);
    
    coin.lifeTime = 400;

    ghost.depth = coin.depth;
    ghost.depth += 1;

    coinGroup.add(coin)
    }
}

//pro preciso de ajuda porque o texto não apareçe 