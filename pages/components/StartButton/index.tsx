import { useContext } from 'react';
import { PlayerContext } from '../../context/Player';
export default function StartButton() {
  const { handleStart } = useContext(PlayerContext);
  return (
    <div>
      <button
        className="
          mt-10
          bg-blue-700
          hover:bg-blue-800 
          hover:text-slate-200
          w-18 h-12 px-4 
          rounded-sm
          text-slate-50
          uppercase
          text-sm
        "
        type="button"
        onClick={handleStart}
      >
        iniciar
      </button>
    </div>
  );
}
