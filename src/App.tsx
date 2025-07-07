import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Features from './components/Features';
import Footer from './components/Footer';
type Props = {
  children: React.ReactNode; // ✅ Typage correct
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Hero/>
     
      <Features/>
      <Footer/>
    </>
  );
};

export default MainLayout;

