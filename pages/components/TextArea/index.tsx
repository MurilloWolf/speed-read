import { useContext } from 'react';
import { PlayerContext } from '../../context/Player';

export default function TextArea() {
  const { text, setText } = useContext(PlayerContext);

  return (
    <div>
      <form className="p-4">
        <textarea
          className="
            rounded-sm
            focus:border-transparent 
            outline-none 
            text-sm
            text-slate-300
            bg-elevation-2 
            p-4 w-96 h-96
            resize-none
          "
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
          value={text}
        />
      </form>
    </div>
  );
}
