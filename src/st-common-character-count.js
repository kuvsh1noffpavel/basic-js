import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let s1Count = {};
  let s2Count = {};
  let result = 0;

  for(let i = 0; i < s1.length; i++){
    s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1
  }
  
  for(let j = 0; j < s2.length; j++){
    s2Count[s2[j]] = (s2Count[s2[j]] || 0) + 1
  }

  for(let key in s1Count){
    if(key in s2Count && s1Count[key] <= s2Count[key]){
      result += s1Count[key];
    } else if (key in s2Count && s1Count[key] > s2Count[key]){
      result += s2Count[key];
    }
  }

  return result;

}
