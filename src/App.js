// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import PropertyPanel from './components/PropertyPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Sidebar />
        <Workspace />
        <PropertyPanel />
      </div>
    </DndProvider>
  );
};

export default App;
