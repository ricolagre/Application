// src/App.tsx
import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Features from './components/Features';

const App = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
};

export default App;
