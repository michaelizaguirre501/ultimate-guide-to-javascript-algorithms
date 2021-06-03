//Given a sentence, return the longest word in the string. E.g
//longestWord('Top Shelf Web Development Training on Scotch')
//should return 'Development'

// function longestWord(text) {
//   let arrayOfText = text.split(" ");
//   let result = arrayOfText.sort((a, b) => b.length - a.length);
//   return result[0];
// }

function longestWord(text) {
  let result = text.split(" ").reduce((maxLengthWord, currentWord) => {
    if (currentWord.length > maxLengthWord.length) {
      return currentWord;
    } else {
      return maxLengthWord;
    }
  }, "");
  return result;
}
module.exports = longestWord;
