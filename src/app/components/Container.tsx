import React from 'react';
import { CommonProps } from '@/app/types/interfaces';

interface ContainerProps extends CommonProps {
  children: React.ReactNode;
  height?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  styles,
  className,
  height = 'auto',
}) => {
  return (
    <div
      style={{
        ...styles,
        height: height,
      }}
      className={`border border-black ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
