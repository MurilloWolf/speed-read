import { useContext } from 'react';
import { PlayerContext } from '../../context/Player';
export default function StartButton() {
  const { handleStart } = useContext(PlayerContext);
  return (
    <div>
      <button
        className="
          bg-blue-700
          hover:bg-blue-800 
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
