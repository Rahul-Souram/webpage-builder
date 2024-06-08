// src/components/components/ButtonComponent.js
import React, { useState } from 'react';

const ButtonComponent = () => {
  const [text, setText] = useState('Click Me');
  const [link, setLink] = useState('#');

  return (
    <div className="component button-component">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Button Text"
      />
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Button Link"
      />
      <a href={link} className="button">{text}</a>
    </div>
  );
};

export default ButtonComponent;
