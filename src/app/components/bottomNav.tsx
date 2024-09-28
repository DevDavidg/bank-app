import React, { useState } from 'react';
import Container from './Container';
import Link from '@/app/components/Link';

interface BottomNavProps {
  onLinkClick: (index: number) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ onLinkClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
    onLinkClick(index);
  };

  return (
    <Container
      className="fixed bottom-0 w-full flex items-center justify-around"
      height="4rem"
    >
      <Link
        navType="home"
        onClick={() => handleLinkClick(0)}
        isActive={activeIndex === 0}
      />
      <Link
        navType="transfer"
        onClick={() => handleLinkClick(1)}
        isActive={activeIndex === 1}
      />
      <Link
        navType="analytics"
        onClick={() => handleLinkClick(2)}
        isActive={activeIndex === 2}
      />
      <Link
        navType="config"
        onClick={() => handleLinkClick(3)}
        isActive={activeIndex === 3}
      />
    </Container>
  );
};

export default BottomNav;
