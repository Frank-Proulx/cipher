$(document).ready(function() {

  const answer = prompt("What is your sentence?");
  console.log(answer);
  function twoLetter(promptAnswer) {
    return (promptAnswer.charAt(0) + promptAnswer.charAt(promptAnswer.length - 1)).toUpperCase();
  }
  const firstFunction = twoLetter(answer);
  function reverseLetter(letters) {
    return letters.charAt(1) + letters.charAt(0);
  }
  function caller(promptAnswer) {
    return answer + reverseLetter(twoLetter(promptAnswer));
  }
  function counter(promptAnswer) {
    return promptAnswer.charAt(Math.floor(promptAnswer.length / 2)) + caller(promptAnswer);
  }
  const finalAnswer = counter(answer);
  
  $("h1").click(function() {
    alert(answer);
  });

  $("p").click(function() {
    alert(finalAnswer);
  });

});