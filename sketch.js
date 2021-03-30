var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function setup(){
  database = firebase.database();
  createCanvas(1000,450);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();


}



function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
     clear();
     quiz.play();
  }
  
 
  
  
  
}
