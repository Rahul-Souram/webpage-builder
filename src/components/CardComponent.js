// src/components/components/CardComponent.js
import React, { useState } from 'react';

const CardComponent = () => {
  const [title, setTitle] = useState('Card Title');
  const [content, setContent] = useState('Card content goes here.');
  const [image, setImage] = useState('https://via.placeholder.com/150');

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="component card-component">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Card Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Card Content"
      />
      <img src={image} alt="Card" style={{ maxWidth: '100%' }} />
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default CardComponent;
