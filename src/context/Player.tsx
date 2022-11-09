import {
  createContext,
  ReactElement,
  useMemo,
  useState,
  useEffect,
} from 'react';
import getSpecialCharacterIndex from '../utils/getSpecialCharacterIndex';
import { getMiliSec } from '../utils/getWordsPerMinute';
interface Props {
  children: ReactElement;
}

export const PlayerContext = createContext({
  text: '',
  setText: (string: string) => {},
  isPlaying: false,
  textArray: [],
  handlePlayAndPause: () => {},
  handleStart: () => {},
  currentPosition: 0,
  wordsPerMinute: 300,
  setWordsPerMinute: (number: number) => {},
});

export default function PlayerProvider({ children }: Props) {
  /* const ipsum = `Em pleno 2022, ano do Elon Musk. Marcha nos projetos. Pré-treino bateu. Parabéns, mas se o shape não estiver em dia, nada vale o parabéns. A gringa está tentando entender o shape. Se seu pai não te ensinou a frequentar uma academia, ele te educou errado. Só queria voltar no tempo e jogar meu Super Nintendo.
    Em pleno 2022, ano de copa do mundo. Só queria voltar no tempo e jogar meu Super Nintendo. Quem nunca errou que atire a primeira pedra. O shape está falando. Tá acordado e desempregado, obrigatóriamente, teoricamente, praticamente, necessariamente, deve estar no shape. Qual a chance pai? Eu sou apenas um mero camponês. Em pleno 2022 e o dev usando css puro sem tailwind`; */
  const [text, setText] = useState('');
  const [textArray, setTextArray] = useState([] as string[]);
  const [miliSec, setMiliSec] = useState(500);
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState(300);

  const indexes = useMemo(
    () => getSpecialCharacterIndex(textArray, [',', '.']),
    [textArray],
  );

  const nextWorld = () => {
    setCurrentPosition((oldState) => oldState + 1);
  };
  const reset = () => {
    setIsPlaying(false);
    setCurrentPosition(0);
  };

  const newInterval = (especial: boolean) => {
    const defaultTime = getMiliSec(text, wordsPerMinute);
    const charTimer = {
      '.': 450,
      ',': 250,
      '\n': 800,
    };

    const currentWord = textArray[currentPosition];
    const lastChar =
      !!currentWord && currentWord.length > 0
        ? currentWord[currentWord.length - 1]
        : currentWord[0];
    clearInterval(timer);

    return setInterval(
      nextWorld,
      especial
        ? charTimer[lastChar as keyof typeof charTimer] + defaultTime
        : defaultTime,
    );
  };

  useEffect(() => {
    if (isPlaying && text) {
      if (currentPosition < textArray.length) {
        const isSpecialChar = indexes.includes(currentPosition);
        const newTimer = newInterval(isSpecialChar);
        setTimer(newTimer);
      } else reset();
    } else clearInterval(timer);
  }, [isPlaying, currentPosition]);

  const handlePlayAndPause = () => {
    setIsPlaying((oldState) => !oldState);
  };

  const handleStart = () => {
    setIsPlaying(true);
    setTextArray(text.split(' '));
  };

  const contextValue = useMemo(
    () => ({
      text,
      setText,
      handlePlayAndPause,
      handleStart,
      textArray,
      isPlaying,
      currentPosition,
      wordsPerMinute,
      setWordsPerMinute
    }),
    [
      text,
      setText,
      isPlaying,
      handlePlayAndPause,
      handleStart,
      textArray,
      currentPosition,
      wordsPerMinute,
    ],
  );

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
}
