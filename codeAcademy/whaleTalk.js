// input에서 모음만 따로 + e와 u는 두 번씩
const input = "Hi, human";
const vowels = ["a", "e","i","o","u"];
const resultArray = [];

for(let i=0; i<input.length; i++) {
  for(let j=0; j<vowels.length; j++) {
    if(input[i]===vowels[j]) {
      if(input[i]==='e') {
        resultArray.push('ee')
      } else if(input[i]==='u') {
        resultArray.push('uu')
      } else {
        resultArray.push(input[i])
      }
    }
  }
}

const resultString = resultArray.join("").toUpperCase();
console.log(resultString)
