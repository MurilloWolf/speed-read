import { Play, Gear } from 'phosphor-react';

export default function VideoController(){
  return(
    <div className='flex flex-col md:w-4/6 w-full py-4'>
      <div className='flex items-center justify-between px-4 '>
        <div className='w-full'>
          <div className="flex justify-end mb-1">
            <span className="text-sm font-medium text-blue-700 dark:text-white">54/225  </span>
          </div>
          <progress  max="100" value="32" className='h-1 hover:h-2 w-full transition-all ease-in-out cursor-pointer'>
            progress
          </progress>
        </div>
      </div>
      <div className='flex justify-between flex-1 w-full px-4 py-1'>
        <Play size={32} className="cursor-pointer text-gray-400 hover:text-gray-300"/> 
        <Gear size={32} className="cursor-pointer text-gray-400 hover:text-gray-300"/>
      </div>
    </div>
  )
}