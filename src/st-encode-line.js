import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let strCount = {};

  let result = "";

  for(let i = 0; i < str.length; i++){
    strCount[str[i]] = (strCount[str[i]] || 0) + 1
  }

  for(let key in strCount){
    if(strCount[key] > 1){
      result += `${strCount[key]}${key}`;
    } else if (strCount[key] == 1){
      result += `${key}`
    }
  }

  return result;
}
