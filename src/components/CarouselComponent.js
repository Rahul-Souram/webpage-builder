// src/components/components/CarouselComponent.js
import React, { useState } from 'react';

const CarouselComponent = () => {
  const [images, setImages] = useState(['https://via.placeholder.com/150']);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages([...images, reader.result]);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="component carousel-component">
      <div className="carousel">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} style={{ maxWidth: '100%' }} />
        ))}
      </div>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default CarouselComponent;
