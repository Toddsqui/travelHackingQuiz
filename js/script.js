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
    for(var i = 1; i <= total; i++){
      if(eval('q'+ i) == answers[i - 1]){
      score++; // this will give a point to the student who gets the question correctly
    }
}

  // display results
  var results = document.getElementById('results');
  results.innerHTML = "<h3>You scored <span>"+ score + "</span> out of <span>" + total + "</span></h3>";
  alert('You scored ' + score + " out of " + total + "!");

  return false;
}
