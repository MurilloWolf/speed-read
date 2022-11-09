import { useContext } from 'react';
import { PlayerContext } from '../../context/Player';
import VideoController from '../VideoController';

export default function Display() {
  const { textArray, currentPosition } = useContext(PlayerContext);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-4">
      <div className="h-96 p-4  md:w-4/6 w-full  bg-elevation-2 flex justify-center items-center">
        <h3 className="text-4xl text-gray-300 text-center">
          {textArray[currentPosition]}
        </h3>
      </div>
      <VideoController />
    </div>
  );
}
// w-64 h-64 bg-elevation-1 flex justify-center items-center
