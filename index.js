// Import stylesheets
import './style.css';

// Write Javascript code!
function isNameValid(name) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let countS = 0;

  let findS = 'S';
  let convertinarray = [...name];

  // loop through string to test if each character is a vowel
  for (let letter of name.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }

    if (findS.toUpperCase().includes(letter.toUpperCase())) {
      countS++;
    }
  }

  //if more than one vovel return message
  if (count > 1) return 'String cannot have more than one vovel!';

  if (countS > 1) {
    let filteredData = convertinarray.filter((x) => x !== 'T');
    let result = filteredData.toString();

    return result;
  }
  return name;
}

let result = isNameValid('STmegTSS');
console.log(result);
