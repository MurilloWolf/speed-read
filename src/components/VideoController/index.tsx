import { useContext } from 'react';
import { Play, Gear } from 'phosphor-react';
import { PlayerContext } from '../../context/Player';

export default function VideoController() {
  const { currentPosition, textArray, handlePlayAndPause } =
    useContext(PlayerContext);

  return (
    <div className="flex flex-col md:w-4/6 w-full py-4">
      <div className="flex items-center justify-between px-4 ">
        <div className="w-full">
          <div className="flex justify-end mb-1">
            <span className="text-sm font-medium text-gray-400">{`${currentPosition}/${
              textArray.length || 0
            }`}</span>
          </div>
          <progress
            max={textArray.length}
            value={currentPosition}
            className="h-1 hover:h-2 w-full transition-all ease-in-out cursor-pointer"
          >
            progress
          </progress>
        </div>
      </div>
      <div className="flex justify-between flex-1 w-full px-4 py-1">
        <Play
          size={32}
          className="cursor-pointer text-gray-400 hover:text-gray-300"
          onClick={handlePlayAndPause}
        />
        <Gear
          size={32}
          className="cursor-pointer text-gray-400 hover:text-gray-300"
        />
      </div>
    </div>
  );
}
