'use client';
import React from 'react';
import HomePage from './pages/HomePage';
import TransferPage from './pages/TransferPage';
import AnalyticsPage from './pages/AnalyticsPage';
import Config from './pages/Config';
import BottomNav from './components/bottomNav';
import { currencyTranslate } from '@/functions/currency';

export default function MainPage() {
  const handleScroll = (index: number) => {
    window.scrollTo({ left: window.innerWidth * index, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="flex overflow-hidden"
        style={{
          width: '400vw',
          height: '100vh',
          scrollSnapType: 'x mandatory',
        }}
      >
        <div style={{ width: '100vw' }}>
          <HomePage money={currencyTranslate(1000)} />
        </div>
        <div style={{ width: '100vw' }}>
          <TransferPage />
        </div>
        <div style={{ width: '100vw' }}>
          <AnalyticsPage />
        </div>
        <div style={{ width: '100vw' }}>
          <Config />
        </div>
      </div>
      <BottomNav onLinkClick={handleScroll} />
    </>
  );
}
