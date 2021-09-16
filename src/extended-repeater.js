import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(string, options) {

  const STR = String(string);
  const OPT = options;
  const DEFAULT_SEPARATOR = '+';
  const DEFAULT_ADDITION_SEPARATOR = '|';

  let memSeparator = DEFAULT_SEPARATOR;
  let memAddSepataor = DEFAULT_ADDITION_SEPARATOR;

  if (OPT.separator) memSeparator = OPT.separator;
  if (OPT.additionSeparator) memAddSepataor = OPT.additionSeparator;

  let memStr = STR;

  if (OPT.addition !== undefined){
    for (let i = 0; i < OPT.additionRepeatTimes - 1; i++){
      memStr += (String(OPT.addition) + memAddSepataor);
    }
    memStr += String(OPT.addition);
  }

  let result = memStr;

  for (let i = 0; i < OPT.repeatTimes - 1; i++){
    result += (memSeparator + memStr);
  }

  return result;
}
