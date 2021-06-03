/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  const obj = {};
  for (letter of text) {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

module.exports = maxRecurringChar;
