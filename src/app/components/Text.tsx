import React from 'react';
import { CommonProps } from '@/app/types/interfaces';

interface TextProps extends CommonProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  children,
  theme = 'dark',
  styles,
  className,
}) => {
  return (
    <span className={`text-${theme} ${className}`} style={styles}>
      {children}
    </span>
  );
};

export default Text;
