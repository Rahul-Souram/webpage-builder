// src/components/PropertyPanel.js
import React from 'react';

const PropertyPanel = ({ selectedComponent, updateComponent }) => {
  if (!selectedComponent) return <div className="property-panel">Select a component to edit</div>;

  const handleChange = (e) => {
    updateComponent(selectedComponent.id, { ...selectedComponent, [e.target.name]: e.target.value });
  };

  return (
    <div className="property-panel">
      <h3>Edit Properties</h3>
      <label>
        Text:
        <input
          type="text"
          name="text"
          value={selectedComponent.text || ''}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default PropertyPanel;
