import { useContext } from 'react';
import { PlayerContext } from '../../context/Player';

export default function Display() {
  const { handlePlayAndPause, isPlaying, array, currentPosition } =
    useContext(PlayerContext);
  return (
    <div>
      <div className="w-64 h-64 bg-elevation-1 flex justify-center items-center">
        <h3 className="text-2xl text-gray-300">{array[currentPosition]}</h3>
      </div>
      <button
        className="bg-gray-400 hover:bg-gray-500 w-16 h-12 text-slate-200"
        type="button"
        onClick={handlePlayAndPause}
      >
        {isPlaying ? 'PAUSE' : `PLAY`}
      </button>
    </div>
  );
}
