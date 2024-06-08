// src/components/components/ImageHolder.js
import React, { useState } from 'react';

const ImageHolder = () => {
  const [src, setSrc] = useState('https://via.placeholder.com/150');

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="component image-holder">
      <img src={src} alt="Selected" style={{ maxWidth: '100%' }} />
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default ImageHolder;
