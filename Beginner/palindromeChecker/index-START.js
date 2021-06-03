/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
  text = text.toLowerCase();
  return text == [...text].reverse().join("");
}

module.exports = palindromeChecker;
