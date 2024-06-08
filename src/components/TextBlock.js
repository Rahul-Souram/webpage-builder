// src/components/components/TextBlock.js
import React, { useState } from 'react';

const TextBlock = () => {
  const [text, setText] = useState('Edit me...');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="component text-block">
      <textarea value={text} onChange={handleChange} />
    </div>
  );
};

export default TextBlock;
