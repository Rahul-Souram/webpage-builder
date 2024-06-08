// src/components/Sidebar.js
import React from 'react';
import { useDrag } from 'react-dnd';

const SidebarItem = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem type="TextBlock">Text Block</SidebarItem>
      <SidebarItem type="ImageHolder">Image Holder</SidebarItem>
      <SidebarItem type="ButtonComponent">Button</SidebarItem>
      <SidebarItem type="HeaderComponent">Header</SidebarItem>
      <SidebarItem type="CarouselComponent">Carousel</SidebarItem>
      <SidebarItem type="CardComponent">Card</SidebarItem>
      <SidebarItem type="VideoEmbed">Video Embed</SidebarItem>
      <SidebarItem type="FormComponent">Form</SidebarItem>
      <SidebarItem type="GridLayout">Grid Layout</SidebarItem>
      <SidebarItem type="SocialMediaIcons">Social Media Icons</SidebarItem>
    </div>
  );
};

export default Sidebar;
