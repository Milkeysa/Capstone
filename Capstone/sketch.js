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
let rover;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  push()
  rover = createRoverCam();
  movedY + 900;
  rover.setState = {
    active: true,
    enableControl: false,
    position: [0,0,0],
    rotation: [0,0.1,0],
    offset: [0,90],
    fov: 0.5,
    speed: 100,
    sensitivity: 0.0001
  };

  //calling the functions
  playerView = map(mouseX, 0, windowWidth, playerX, playerY);
  angleMode(DEGREES);
}
// rotateZ(80);

function draw() {
  
  background("lightblue");
  //drawing the functions
  fill("red");
  // rotateY(0);
  // noLights();
  // let state = easycam.getState();
  // translate(0,playerY/2, 0);

  if (keyIsDown("s")|| keyIsDown("S") || keyCode === DOWN_ARROW|| onkeydown === "s") {
    if (playerY - border === 0) {
      playerY = playerY + border;
    }
    if (playerY + border === -140) {
      playerY = playerY - border;
    }
    playerY = playerY + border;
  //   rotateX(90);
  //   translate(0, playerY*-.16 -100, playerY*-1);
  }
  if (keyIsDown("w") || keyIsDown("W") || keyCode === UP_ARROW) {
    if (playerY - border === 0) {
      playerY = playerY + border;
    }
    if (playerY + border === -50) {
      playerY = playerY - border;
    }
    playerY = playerY - border;
  //   rotateX(90);
  //   translate(0, playerY*-.16 -90, playerY*-1);
  }
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
  if (playerY - border === -10) {
    playerY = playerY + border;
  }
  if (playerY + border === 150) {
    playerY = playerY - border;
  }
}
// other players/opponents
//can start 2d*

// gun creation (SAFE AND PG) ps we dont know how to be mean yet

//this part is for rng(damage,health,drop,spawns)

