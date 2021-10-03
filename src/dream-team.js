import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
  if (Array.isArray(arr) == false) {
    return false;
  }
  
  let memArray = arr;
  let resArray = [];
  //memArray.sort();

  for (let i=0; i<memArray.length; i++){
    if (typeof memArray[i] === 'string'){
      resArray.push(memArray[i].trim().slice(0,1).toUpperCase());
    }
  }

  return  resArray.sort().join('');
}
