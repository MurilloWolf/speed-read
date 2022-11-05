
/*
Minuto = 60s
Palavras/Min = Mili

5 = 2500

60000/120 = 500
*/


/**
 *  60.000
 *  10 , => 2500
 *  10 . => 4500 
 *  total = 7000
 */
export function getMiliSec(text : string, wordPerMinute: number){
  const [commas, periods] = getWordsPerMinute(text);

  const pauseCommas = commas * 250;
  const pausePeriods = periods * 450

  const totalPause = pauseCommas + pausePeriods;


  const ONE_MINUTE = 60;
  const miliSec =  Math.round(((ONE_MINUTE * 1000 - totalPause )) / wordPerMinute);
  return miliSec
}


export default function getWordsPerMinute (text: string) {

  const regexComma = /[,]/gim; 
  const regexPeriod = /[.]/gim;

  const commaCounter = [...text.matchAll(regexComma)].length
  const periodCounter = [...text.matchAll(regexPeriod)].length
  return [commaCounter, periodCounter]
}
