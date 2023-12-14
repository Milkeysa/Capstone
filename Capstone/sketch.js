// DOOM game - Capstone Project
// Derinsola Bolaji & Milkeysa Mohamed Jamal
// Date

// Global Variables
let player; let playerView;
let opponent = [];
let playerX = 200; let playerY = 200;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  box()
  //calling the functions
  playerView = map(mouseX, 0, windowWidth, playerX, playerY);
}

function draw() {
  background(220);
  //drawing the functions
  player = square(playerX,playerY,20);
  rectMode(CENTER);
  playerMoves();
}

//starting 2d 
// player creation

function keyPressed(){
// movement creation and control
  
}

function playerMoves(){
  let border = 10;
  //restricting player to canvas
  if(key === "s"|| key === "S" || keyCode === DOWN_ARROW ){
    playerY = playerY + border;
  }
  if(key === "a"|| key === "A" || keyCode === LEFT_ARROW){
    playerX = playerX - border;
  }
  if(key === "d"|| key === "D"|| keyCode === RIGHT_ARROW){
    playerX = playerX + border;
  }
  if(key=== "w"|| key === "W" || keyCode === UP_ARROW){
    playerY = playerY - border;
  }
  if(playerX-border === windowWidth){
    playerX = playerX + border;
  }
  if(playerX+border === windowWidth){
    playerX = playerX - border;
  }
  if(playerY-border === windowHeight){
    playerY = playerY + border;
  }
  if(playerY+border === windowHeight){
    playerY = playerY - border;
  }
}

// mapping function
//should start 3d not 2d
function basicMap(){
  translate(0,200);
  box(0,250,100);
  
}
function startingMap(){

}
// other players/opponents
//can start 2d

// gun creation (SAFE AND PG) ps we dont know how to be mean yet

//this part is for rng(damage,health,drop,spawns)

