export default function getSpecialCharacterIndex(str: string, charList: string[]) {
  const words = str.split(' ');
  console.log(words[9])
    const indexes = words.reduce((acc, word, index) => {
      if (word.endsWith(charList[0])) {
        return [...acc, index];
      }

      return acc;
    }, [] as number[]);
    console.log(indexes)
    return indexes
}

