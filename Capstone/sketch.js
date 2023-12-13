
// Project Title
// Derinsola Bolaji & Milkeysa Mohamed Jamal
// Date

// Global Variables
let player;
let opponent = [];
let playerX = 200;
let playerY = 200;
let playerView;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  //calling the functions
  playerView = map(mouseX, 0, windowWidth, playerX, playerY);
  
}

function keyPressed(){
}

function draw() {
  background(220);
  //drawing the functions
  playerMoves();
}

//starting 2d okie dokie
// player creation
// movement creation and control
function playerMoves(){
  player = square(playerX,playerY,20);
  //restricting player to canvas
  if(key === "s"|| key === "S"){
    playerY = playerY + 10;
  }
  if(key === "a"|| key === "A"){
    playerX = playerX - 10;
  }
  if(key === "d"|| key === "D"){
    playerX = playerX + 10;
  }
  if(key=== "w"|| key === "W"){
    playerY = playerY - 10;
  }
  if(playerX-10 === 0){
    playerX = playerX + 10;
  }
  if(playerX+10 === width){
    playerX = playerX - 10;
  }
  if(playerY-10 === 0){
    playerY = playerY + 10;
  }
  if(playerY === height){
    playerY = playerY - 10;
  }
}
// mapping function

// other players/opponents

// gun creation (SAFE AND PG)   ps we dont know how to be mean yet

//this part is for rng(damage,health,drop,spawns)

