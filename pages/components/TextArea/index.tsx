import { useEffect, useState } from 'react';

export default function TextArea() {
  const [text, setText] = useState('');

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form>
        <textarea onChange={handleChangeText} value={text} />
      </form>
    </div>
  );
}
