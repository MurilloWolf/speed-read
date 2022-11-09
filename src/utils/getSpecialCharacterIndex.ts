export default function getSpecialCharacterIndex(wordsList: string[], charList: string[]) {
    const indexes = wordsList.reduce((acc, word, index) => {
      if (charList.find(char => word.includes(char))) {
        return [...acc, index];
      }

      return acc;
    }, [] as number[]);

    return indexes;
}
