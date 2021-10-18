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

  function reverse(lastAnswer) {
    return lastAnswer.split("").reverse().join("");
  };
  const reverseAnswer = reverse(finalAnswer);
  
  $("h1").click(function() {
    alert(answer);
  });

  $("h2").click(function() {
    alert(finalAnswer);
  });

  $("h3").click(function() {
    alert(reverseAnswer);
  });



});