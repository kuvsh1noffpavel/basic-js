import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");

  let resultArr = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] == '--double-next'){
      if (i == arr.length-1){
        continue;
      } else {
        resultArr.push(arr[i+1]);
        continue;
      }
    } else if (arr[i] == '--double-prev'){	
      if (i == 0){
        continue;
      } else {
        resultArr.splice(i, 0, arr[i-1]);
        continue;
      }
    } else if (arr[i] == '--discard-next'){
      if (i == arr.length-1){
        continue;
      } else {
        i++;
        continue;
      }
    } else if (arr[i] == '--discard-prev'){
      if (i==0){
        continue;
      } else {
        resultArr.splice(i-1, 1);
        continue;
      }
      
    }
    resultArr.push(arr[i]);
  }

  return resultArr;
}
