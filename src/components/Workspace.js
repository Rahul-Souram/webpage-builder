// src/components/Workspace.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import {
  TextBlock,
  ImageHolder,
  ButtonComponent,
  HeaderComponent,
  CarouselComponent,
  CardComponent,
  VideoEmbed,
  FormComponent,
  GridLayout,
  SocialMediaIcons,
} from './components';

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
  SocialMediaIcons,
};

const Workspace = () => {
  const [components, setComponents] = useState([]);
  
  const [, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => addComponent(item.type),
  }));

  const addComponent = (type) => {
    setComponents([...components, { type, id: components.length }]);
  };

  return (
    <div ref={drop} className="workspace">
      {components.map((component) => {
        const Component = COMPONENTS[component.type];
        return <Component key={component.id} />;
      })}
    </div>
  );
};

export default Workspace;
