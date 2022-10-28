1.

function addToZero(array) {

  for (let i = 0; i < array.length; i++) {      //O(n)
    for (let j = i+1; j < array.length; j++) {     //O(n)
      if (array[i] !== j){                              //O(1)
        if (array[i] + array[j] === 0) {          //O(1)
        return true;
        }
      }
    }
  }
}
console.log(addToZero([1, 2, 3, -2]))

//runtime: O(n)
//space: O(1)

2.

function hasUniqueChars(str) {
  let uniqueChars = new Set([])  //O(1)
  for (let i = 0; i < str.length; i++) {   //O(n)
    uniqueChars.add(str[i])   //O(1)
  }
  return uniqueChars.size === str.length
}
console.log(hasUniqueChars("monday"))

//runtime: O(n)
//space: O(n)

3.

function isPangram(string) {
  let strArr = string.toLowerCase(); //O(n)
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //O(n)
  
  for (let i = 0; i < alphabet.length; i++) {  //O(n)
    if(strArr.indexOf(alphabet[i]) < 0){      //O(1)
      return false;
    }
  }
  return true;
}
console.log(isPangram("Hello"))

//runtime: O(n^2)
//space: O(1)

4.  

function findLongestWord(array) {
  let max_str = array[0].length;       //O(n)
    for (let i = 1; i < array.length; i++) {   //O(n)
        let maxi = array[i].length;              //O(n)
        if (maxi > max_str) {             //O(1)
            max_str = maxi;
        }
    }
    return max_str;
}
console.log(findLongestWord(["hi", "hellooo"]));


//runtime: O(n^2)
//space: O(n)



