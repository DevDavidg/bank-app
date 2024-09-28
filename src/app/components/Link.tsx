import React from 'react';
import Icon from './Icon';
import { CommonProps } from '@/app/types/interfaces';
import Home from '@/assets/home.svg';
import Transfer from '@/assets/transfer.svg';
import Analytics from '@/assets/analytics.svg';
import Config from '@/assets/config.svg';

interface LinkProps extends CommonProps {
  onClick: () => void;
  navType?: 'home' | 'transfer' | 'analytics' | 'config';
  isActive?: boolean;
}

const icons = {
  home: Home,
  transfer: Transfer,
  analytics: Analytics,
  config: Config,
};

const Link: React.FC<LinkProps> = ({
  onClick,
  styles,
  theme = 'dark',
  className,
  navType = 'home',
  isActive = false,
}) => {
  return (
    <button
      onClick={onClick}
      style={styles}
      className={`text-${theme} ${className} ${isActive ? 'highlighted' : ''}`}
    >
      <Icon
        icon={icons[navType]}
        size={30}
        styles={{
          filter: isActive ? 'brightness(.5)' : 'none',
          transition: 'filter 0.3s ease',
        }}
      />
    </button>
  );
};

export default Link;
