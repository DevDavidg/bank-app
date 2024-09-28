import React from 'react';
import { CommonProps } from '@/app/types/interfaces';
import Text from './Text';

interface HeaderProps extends CommonProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, styles, theme }) => {
  return (
    <header style={styles} className={`header-${theme} flex flex-col`}>
      {subtitle && (
        <Text theme={theme} className={'uppercase font-bold'}>
          {subtitle}
        </Text>
      )}
      <Text theme={theme} className={'font-semibold text-5xl'}>
        {title}
      </Text>
    </header>
  );
};

export default Header;
