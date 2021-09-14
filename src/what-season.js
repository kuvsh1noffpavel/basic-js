import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

  if (!date){
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error ('Invalid date!');
  }
  const monthCount = date.getMonth();

  if (date instanceof Date){

    if (monthCount === 0 || monthCount === 1 || monthCount === 11){
      return "winter";
    } else if (monthCount === 2 || monthCount === 3 || monthCount === 4){
      return "spring";
    } else if (monthCount === 5 || monthCount === 6 || monthCount === 7){
      return "summer";
    } else if (monthCount === 8 || monthCount === 9 || monthCount === 10){
      return "autumn";
    } 
  } else {
    throw new Error ('Invalid date!');
  }

}
