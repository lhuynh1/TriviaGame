$(document).ready(function(){


// load window with hiding the #gameContent & #gameResults div
$('#gameContent').hide();
$('#gameResults').hide();

// create on click function for start button to begin timer
// within this, also include removing the initial gif image along with start button
$('#start').on("click", function(){

    $('#nfl-gif').hide();
    $('#start').hide();
    $('#gameContent').show();

    // :( can't get my gif images to append!!! 
    // $('.gif-img').append('<img src="../images/fail.gif">');

    // calling start timer function when the start button is clicked
    startTimer();
    return; 
});

// on click function for done button will run the gamecheck function && show the results
$('#done').on("click", function(){
    gameCheck();
    $('#gameContent').hide();
    $('#gameResults').show();
});

// setting the reload windows method to my replay button
$('#replay').on("click", function(){
    location.reload();
});


// global variables
timerCount = 60;

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
    });

    if(timerCount == -1){
        gameCheck();
        $('#gameContent').hide();
        $('.space').html('<h1>TIME\'S UP!!</h1>');
        $('#gameResults').show();
        
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

   
    $('#correctCount').html(correctCounter);
    $('#incorrectCount').html(incorrectCounter);
    $('#unansweredCount').html(unansweredCounter);

    // $('gameResults').show();

    // console.log(correctCounter);
    // console.log(incorrectCounter);
    // console.log(unansweredCounter);
}















});