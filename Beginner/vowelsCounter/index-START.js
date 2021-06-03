/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// function vowelsCounter(text) {
//   let counter = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   const s = [...text.toLowerCase()];
//   s.forEach((letter, i) => {
//     if (vowels.includes(letter)) {
//       counter++;
//     }
//   });
//   return counter;
// }

function vowelsCounter(text) {
  let matched = text.match(/[aeiou]/gi);
  if (matched) {
    return matched.length;
  } else {
    return 0;
  }
}

module.exports = vowelsCounter;
