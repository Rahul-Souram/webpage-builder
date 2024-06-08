// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import PropertyPanel from './components/PropertyPanel';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import './style.css';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [components, setComponents] = useState([]);

  const updateComponent = (id, newProps) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) => (component.id === id ? { ...component, ...newProps } : component))
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Sidebar />
        <Workspace />
        <PropertyPanel selectedComponent={selectedComponent} updateComponent={updateComponent} />
      </div>
    </DndProvider>
  );
};

export default App;
