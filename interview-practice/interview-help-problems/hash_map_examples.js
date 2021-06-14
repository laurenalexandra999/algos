// #1365 How Many Numbers Are Smaller Than Current Number // Success 

// Input: nums = [8,1,2,2,3] - sort it and apply some hashMap
// Output: [4,0,1,1,3]

// [8,1,2,2,3]
// Sort - 
//  0 1 2 3 4
// [1,2,2,3,8]
 
//  1-0 - i
//  2-1  -i 
//  3-3  - i
//  8-4

// [8,1,2,2,3]
//  4 0 1 1 3

// Success passed. 
var smallerNumbersThanCurrent = function(nums) {
  // nums [8,1,2,2,3]
  var input = [...nums];
  var hashMap = new Map(); 
  var valuesToReturn = []; 
  
  // sort ascending  
  sorted = input.sort((a,b) => a - b); 
  // sorted [1,2,2,3,8] 
  
  // pseudocode 
  /* for each num in sorted 
  add value as key and index as value to hashmap 
  if the hashmap does not already have key */  
  
  for(var j = 0; j < sorted.length; j++){
    if(!hashMap.has(sorted[j])) {
       hashMap.set(sorted[j], j); 
    } 
  } 
  
  // pseudocode 
  /* then for each num in nums 
  do a lookup by key and add the value to 
  array to return. */ 
  
  for(var k = 0; k < nums.length; k++) {
    valuesToReturn.push(hashMap.get(nums[k])); 
  } 
    
    console.log(nums); 
  
  return valuesToReturn; 
}


// #760 Find Anagram Mappings

/*
Given two lists A and B, and B is an anagram of A. B is an anagram of A means B is made by randomizing the order of the elements in A.

We want to find an index mapping P, from A to B. A mapping P[i] = j means the ith element in A appears in B at index j.

These lists A and B may contain duplicates. If there are multiple answers, output any of them.

For example, given

A = [12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]
We should return
[1, 4, 3, 2, 0]
*/

var anagramMappings = function(A, B) {
    var hashMap = new Map();
    var listToReturn = []; 
    
    // create HashMap using B  - hashMap
    // 50 0
    // 12 1
    // 32 2
    // 46 3
    // 28 4
    for(var i = 0; i < B.length; i ++) {
      hashMap.set(B[i], i); 
    } 
    
    for(var i = 0; i < A.length; i ++) {
       listToReturn.push(hashMap.get(A[i])); 
    }
    
    return listToReturn; 
  }; 

  /* 
  804. Unique Morse Code Words

  International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

  For convenience, the full table for the 26 letters of the English alphabet is given below:

  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

  Return the number of different transformations among all words we have.

  Example:
  Input: words = ["gin", "zen", "gig", "msg"]
  Output: 2
  Explanation: 
  The transformation of each word is:
  "gin" -> "--...-."
  "zen" -> "--...-."
  "gig" -> "--...--."
  "msg" -> "--...--."

  There are 2 different transformations, "--...-." and "--...--.".
  Note:

  The length of words will be at most 100.
  Each words[i] will have length in range [1, 12].
  words[i] will only consist of lowercase letters.
  */

/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    
  const hashMap = new Map();
  
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]; 
  
  alphabet.forEach(letter => {
      let indexMorse = alphabet.indexOf(letter) 
      hashMap.set(letter, morse[indexMorse]); 
  });
  
  const transformations = []; 
  
  words.forEach(word => {
      let translation = "";
      word.split('').forEach(letter => {
          translation += hashMap.get(letter); 
      });
      
      transformations.push(translation); 
  }); 
  
  const uniqueTransforms = []; 
  
  transformations.forEach(code => {
      if (!uniqueTransforms.includes(code)) {
        uniqueTransforms.push(code);  
      } 
  });
  
  return uniqueTransforms.length;
};
