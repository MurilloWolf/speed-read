import { useContext } from 'react';
import { PlayerContext } from '../../context/Player';

export default function TextArea() {
  const { text, setText } = useContext(PlayerContext);

  return (
    <div>
      <form>
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
          value={text}
        />
      </form>
    </div>
  );
}
