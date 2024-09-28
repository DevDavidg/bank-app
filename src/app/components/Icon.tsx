import Image from 'next/image';
import React from 'react';
import { CommonProps } from '@/app/types/interfaces';

interface IconProps extends CommonProps {
  icon: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ icon, size = 24, styles }) => {
  return (
    <Image src={icon} alt="icon" width={size} height={size} style={styles} />
  );
};

export default Icon;
