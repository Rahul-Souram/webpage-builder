// src/components/components/HeaderComponent.js
import React, { useState } from 'react';

const HeaderComponent = () => {
  const [title, setTitle] = useState('Header Title');
  const [subtitle, setSubtitle] = useState('Subtitle here');

  return (
    <div className="component header-component">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Header Title"
      />
      <input
        type="text"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Subtitle"
      />
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
    </div>
  );
};

export default HeaderComponent;
