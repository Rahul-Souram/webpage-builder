// src/components/Workspace.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import TextBlock from '../components/TextBlock';
import ImageHolder from '../components/ImageHolder';
import ButtonComponent from '../components/ButtonComponent';
import HeaderComponent from '../components/HeaderComponent';
import CarouselComponent from '../components/CarouselComponent';
import CardComponent from '../components/CardComponent';
import VideoEmbed from '../components/VideoEmbed';
import FormComponent from '../components/FormComponent';
import GridLayout from '../components/GridLayout';

const COMPONENTS = {
  TextBlock,
  ImageHolder,
  ButtonComponent,
  HeaderComponent,
  CarouselComponent,
  CardComponent,
  VideoEmbed,
  FormComponent,
  GridLayout,
};

const Workspace = () => {
  const [components, setComponents] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item) => addComponentToWorkspace(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addComponentToWorkspace = (component) => {
    setComponents((prevComponents) => [...prevComponents, component.type]);
  };

  return (
    <div className="workspace" ref={drop}>
      {components.map((component, index) => {
        const Component = COMPONENTS[component];
        return <Component key={index} />;
      })}
      {isOver && <div className="drop-indicator">Drop here</div>}
    </div>
  );
};

export default Workspace;
