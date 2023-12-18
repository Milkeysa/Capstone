// DOOM game - Capstone Project
// Derinsola Bolaji & Milkeysa Mohamed Jamal
// Date

// Global Variables
let player;
let playerView;
let opponent = [];
let border = 10;
let playerX = 0;//player starting x point 
let playerY = 0;//player starting y point


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //calling the functions
  playerView = map(mouseX, 0, windowWidth, playerX, playerY);
  angleMode(DEGREES);
}

function draw() {
  background("lightblue");
  //drawing the functions
  fill("red");
  rotateX(80);
  //rotateY(0);
  box(10000, 10000, 29);
  rectMode(CENTER);
  playerMoves();
  strokeWeight(2);
  noStroke();
  startingMap();
}

//starting 2d 
// player creation

function keyPressed() {
  // movement creation and control
  
}

// mapping function
//should start 3d not 2d

function basicMap() {
  translate(0, 200);
  box(100, 100, 200);
}

function startingMap() {
  fill("grey");
  let wallheight = 120;
  translate(-150, 0);
  box(10, 300, wallheight);
  translate(300, 0);
  box(10, 300, wallheight);
  translate(-150, -150);
  box(300, 10, wallheight);
}


function playerMoves() {
  push();
  translate(playerX, playerY);
  fill("white");
  box(5, 10, 80);
  pop();
  //restricting player to canvas
  if (fill === "red") {
    playerY = 0;
    playerX = 0;
  }
  if (key === "s" || key === "S" || keyCode === DOWN_ARROW|| onkeydown === "s") {
    playerY = playerY + border;
  }
  if (key === "a" || key === "A" || keyCode === LEFT_ARROW) {
    playerX = playerX - border;
  }
  if (key === "d" || key === "D" || keyCode === RIGHT_ARROW) {
    playerX = playerX + border;
  }
  if (key === "w" || key === "W" || keyCode === UP_ARROW) {
    playerY = playerY - border;
  }
  if (playerX - border === -140) {
    playerX = playerX + border;
  }
  if (playerX + border === 140) {
    playerX = playerX - border;
  }
  if (playerY - border === -140) {
    playerY = playerY + border;
  }
  if (playerY + border === 140) {
    playerY = playerY - border;
  }
}
// other players/opponents
//can start 2d*

// gun creation (SAFE AND PG) ps we dont know how to be mean yet

//this part is for rng(damage,health,drop,spawns)

