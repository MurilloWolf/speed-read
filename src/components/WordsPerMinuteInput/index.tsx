import { useContext } from 'react'
import { PlayerContext } from '../../context/Player'

export default function WordsPerMinuteInput() {
  const { wordsPerMinute, setWordsPerMinute } = useContext(PlayerContext);
  return (
    <div>
      <input
        type="number"
        value={wordsPerMinute}
        onChange={(e) => setWordsPerMinute(Number(e.target.value))}
      />
    </div>
  )
}
