export default function getSpecialCharacterIndex(str: string, charList: string[]) {
  const words = str.split(' ');
    const indexes = words.reduce((acc, word, index) => {
      if (charList.find(char => word.includes(char))) {
        return [...acc, index];
      }

      return acc;
    }, [] as number[]);

    return indexes;
}
