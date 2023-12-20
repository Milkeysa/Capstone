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
let easyCam, state = {
    distance: 100,
    center  : [playerX,playerY,0],
    rotation: [mouseX, mouseY, 0.1, 0.85],
    viewPoint : [playerX,playerY,20,20] 
};

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  // easycam = createEasyCam();
  // setViewport(viewPoint);
  // set initial camera state
  //easycam.setState(state, 1000); // animate to state in 1 second
  //easycam.state_reset = state;   // state to use on reset
  //calling the functions
  playerView = map(mouseX, 0, windowWidth, playerX, playerY);
  angleMode(DEGREES);
}
rotateZ(80);
function draw() {
  
  background("lightblue");
  //drawing the functions
  fill("red");
  // rotateY(0);
  // noLights();
  // let state = easycam.getState();
  // translate(0,playerY/2, 0);

  // if (keyIsDown("s")|| keyIsDown("S") || keyCode === DOWN_ARROW|| onkeydown === "s") {
  //   playerY = playerY + border;
  //   rotateX(270);
  //   translate(0, playerY*-.16 -100, playerY*-1);
  // }
  // if (keyIsDown("w") || keyIsDown("W") || keyCode === UP_ARROW) {
  //   playerY = playerY - border;
  //   rotateX(90);
  //   rotateY(80);
  //   translate(0, playerY*-.16 -90, playerY*-1);
  // }
  // translate(playerX*-1, 0, playerY*-1);

  // rotateZ(playerY/13);
  rotateX(80);
  box(10000, 10000, 29);
  rectMode(CENTER);
  startingMap();
  playerMoves();
  
  //strokeWeight(2);
  // noStroke();
  
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
  if (keyIsDown("s")|| keyIsDown("S") || keyCode === DOWN_ARROW|| onkeydown === "s") {
    playerY = playerY + border;
  }
  if (keyIsDown("a")|| keyIsDown( "A") || keyCode === LEFT_ARROW) {
    playerX = playerX - border;
    rotateZ(playerX);
  }
  if (keyIsDown("d") || keyIsDown("D") || keyCode === RIGHT_ARROW) {
    playerX = playerX + border;
    rotateZ(playerX);
  }
  if (keyIsDown("w") || keyIsDown("W") || keyCode === UP_ARROW) {
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

