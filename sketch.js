var ball;
var database;
var pos;
var gameState;
var playerCount;
var game,form,player;
var form;
var allPlayers;
var car1,car2,car3,car4;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
   game=new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
   
    drawSprites();

}


