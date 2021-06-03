/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  const arrayFromString = text.split(" ");
  let properlyCasedArr = arrayFromString.map(
    (x) => x[0].toUpperCase() + x.substr(1).toLowerCase()
  );
  return properlyCasedArr.join(" ");
}

module.exports = capSentence;
