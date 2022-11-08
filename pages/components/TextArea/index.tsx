import { useContext } from 'react';
import { PlayerContext } from '../../context/Player';
import StartButton from '../StartButton';
export default function TextArea() {
  const { text, setText } = useContext(PlayerContext);

  return (
    <form className=" p-4 flex flex-col md:w-4/6 w-full justify-center items-center ">
      <label className="text-gray-400 my-4 md:text-xl text-lg">
        Digite ou cole o texto que deseja ler
      </label>
      <textarea
        className="
          rounded-sm
          focus:border-transparent 
          outline-none 
          text-sm
          text-slate-300
          bg-elevation-2 
          p-4 w-full h-96
          resize-none
          "
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
        }
        value={text}
      />
      <StartButton />
    </form>
  );
}
