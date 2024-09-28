import React from 'react';
import Header from '../components/Header';

interface HomePageProps {
  money: string;
}

const HomePage = ({ money }: HomePageProps) => {
  return (
    <div className="pt-10 px-5">
      <Header title={money} subtitle="balance" />
    </div>
  );
};

export default HomePage;
