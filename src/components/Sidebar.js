// src/components/Sidebar.js
import React from 'react';
import { useDrag } from 'react-dnd';

const COMPONENT_LIST = [
  { type: 'TextBlock', name: 'Text Block' },
  { type: 'ImageHolder', name: 'Image Holder' },
  { type: 'ButtonComponent', name: 'Button' },
  { type: 'HeaderComponent', name: 'Header' },
  { type: 'CarouselComponent', name: 'Carousel' },
  { type: 'CardComponent', name: 'Card' },
  { type: 'VideoEmbed', name: 'Video Embed' },
  { type: 'FormComponent', name: 'Form' },
  { type: 'GridLayout', name: 'Grid Layout' },
  { type: 'SocialMediaIcons', name: 'Social Media Icons' },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {COMPONENT_LIST.map((component) => (
        <SidebarItem key={component.type} component={component} />
      ))}
    </div>
  );
};

const SidebarItem = ({ component }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type: component.type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="sidebar-item"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {component.name}
    </div>
  );
};

export default Sidebar;
