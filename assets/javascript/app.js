$(document).ready(function(){

// 


// create object storing each questions with answer choices in an array and the correct answer & gif
// questions
// 1. Who is the only athlete to ever play in a Super Bowl and a World Series? A: Deion Sanders
// 2. Which NFL quarterback has been to the most Super Bowls? A: Tom Brady
// 3. In what year did the Houston Texans become a team in the US National Football League? A: 2002
// 4. How many teams are there in the American National Football League? A: 32, 23, 16, 52
// 5. Who has the most wins as a head coach in the NFL? A: Don Shula
// 6. Who is the last non-quarterback to win NFL MVP? A: Adrian Peterson
// 7. Who is the last non-quarterback to win NFL MVP? A: Raiders
// 8. Who was the first player drafted in the first NFL draft in 1936? A: Jay Berwanger
// 9. What team was originally named the New York Titans? A: New York Jets
// 10. Which NFL team features a helmet logo on only one side of their helmet? A: Pittsburgh Steelers


// load window with hiding the #gameContent & #gameResults div
$('#gameContent').hide();
$('#gameResults').hide();

// create on click function for start button to begin timer
// within this, also include removing the initial gif image along with start button
$('#start').on("click", function(){

    $('#nfl-gif').hide();
    $('#start').hide();
    $('#gameContent').show();

    $('.gif-img').append('<img src="../images/fail.gif">');

    // calling start timer function when the start button in clicked
    startTimer();
    return;
   
    
});



// global variables
timerCount = 90;

unansweredCounter = 0;
correctCounter = 0;
incorrectCounter = 0;

var startTimer = function(){
    count = setInterval(countDown, 1000);
}
// timer count down function from 90 seconds and displays it
function countDown(){
    timerCount--;
    $('#timerCounter').html(timerCount + " Seconds");
    
    $('#done').on("click", function(){
        clearInterval(count);
        // gameCheck();
        // // timesUp();
        // // // ???? not working
        // // // $('#gameContent').hide();
        // $('gameResults').show();
    });

    if(timerCount == -1){
        gameCheck();
        $('#gameContent').hide();
    }
    
    
}

var gameCheck = function timesUp(){

    var Q1 = $('input:radio[name="q1"]:checked').val();
    var Q2 = $('input:radio[name="q2"]:checked').val();
	var Q3 = $('input:radio[name="q3"]:checked').val();
	var Q4 = $('input:radio[name="q4"]:checked').val();
	var Q5 = $('input:radio[name="q5"]:checked').val();
	var Q6 = $('input:radio[name="q6"]:checked').val();
	var Q7 = $('input:radio[name="q7"]:checked').val();
	var Q8 = $('input:radio[name="q8"]:checked').val();
	var Q9 = $('input:radio[name="q9"]:checked').val();
    var Q10 = $('input:radio[name="q10"]:checked').val();
    
    // check for right or wrong answer choices
    
    if(Q1 == undefined){
        unansweredCounter++;
        // console.log(unansweredCounter);
    }
    else if(Q1 == "Deion Sanders"){
        correctCounter++;
        // console.log(correctCounter);
    }
    else{
        incorrectCounter++;
        // console.log(incorrectCounter);
    }

    if(Q2 == undefined){
        unansweredCounter++;
    }
    else if(Q2 == "Tom Brady"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    if(Q3 == undefined){
        unansweredCounter++;
    }
    else if(Q3 == "2002"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    if(Q4 == undefined){
        unansweredCounter++;
    }
    else if(Q4 == "32"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    if(Q5 == undefined){
        unansweredCounter++;
    }
    else if(Q5 == "Don Shula"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    if(Q6 == undefined){
        unansweredCounter++;
    }
    else if(Q6 == "Adrian Peterson"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    if(Q7 == undefined){
        unansweredCounter++;
    }
    else if(Q7 == "5"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    if(Q8 == undefined){
        unansweredCounter++;
    }
    else if(Q8 == "Jay Berwanger"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    if(Q9 == undefined){
        unansweredCounter++;
    }
    else if(Q9 == "New York Jets"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    if(Q10 == undefined){
        unansweredCounter++;
    }
    else if(Q10 == "Pittsburgh Steelers"){
        correctCounter++;
    }
    else{
        incorrectCounter++;
    }

    // $('#done').on("click", function(){
    // update game results content with user's answers
    $('#correctCount').html(correctCounter);
    $('#incorrectCount').html(incorrectCounter);
    $('unasweredCount').html(unansweredCounter);

    $('gameResults').show();
    // });
}


// function to display each question

// end-game area displaying results: correct, incorrect & unanswered










});