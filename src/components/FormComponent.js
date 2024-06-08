// src/components/components/FormComponent.js
import React, { useState } from 'react';

const FormComponent = () => {
  const [fields, setFields] = useState([{ name: 'Name', type: 'text', value: '' }]);

  const addField = () => {
    setFields([...fields, { name: 'New Field', type: 'text', value: '' }]);
  };

  const handleFieldChange = (index, e) => {
    const newFields = fields.slice();
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
  };

  return (
    <div className="component form-component">
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={field.name}
            onChange={(e) => handleFieldChange(index, e)}
            placeholder="Field Name"
          />
          <select
            name="type"
            value={field.type}
            onChange={(e) => handleFieldChange(index, e)}
          >
            <option value="text">Text</option>
            <option value="textarea">Textarea</option>
            <option value="checkbox">Checkbox</option>
          </select>
        </div>
      ))}
      <button onClick={addField}>Add Field</button>
    </div>
  );
};

export default FormComponent;
