import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(value) {
  
  let regExp = /^[0-9.]{0,300}$/u ; // Регулярное выражение на проверку цифр и точки
  let res =  regExp.test(value);

  if(typeof(value) !== 'string' || value.length == 0 || res == false){
    return false;
  } 
 
  let sampleActivity = parseFloat(value);  

  if (sampleActivity > 15 || sampleActivity <= 0){
    return false;
  }

  let result = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(Math.LN2/HALF_LIFE_PERIOD));

  return result;
}
