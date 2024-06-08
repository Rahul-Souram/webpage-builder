// src/components/components/VideoEmbed.js
import React, { useState } from 'react';

const VideoEmbed = () => {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="component video-embed">
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Video URL"
      />
      {url && (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoEmbed;
