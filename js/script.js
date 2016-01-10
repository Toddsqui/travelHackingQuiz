function submitAnswers(){
  var total = 5;
  var score = 0;

// get user input

  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  // basic validation

    for(var i = 1; i <= total; i++){
      if(eval('q'+ i) == null || eval('q'+ i) == ''){
        alert("You missed question " + "q" + i);
        return false;
      }
    }
    // set correct answers
    var answers = ["c","b","c","a","c"];

    // check answers and give points
    if(q1 == answers[0]){
      score++; // this will give a point to the student who gets the question correctly
    }

    if(q2 == answers[1]){
      score++; // this will give a point to the student who gets the question correctly
    }

    if(q3 == answers[2]){
      score++; // this will give a point to the student who gets the question correctly
    }

    if(q4 == answers[3]){
      score++; // this will give a point to the student who gets the question correctly
    }

    if(q5 == answers[4]){
      score++; // this will give a point to the student who gets the question correctly
    }

    alert('You scored ' + score + " out of " + total + "!");

}
