'use client';
import Hero from '@/components/Hero';
import AppContext from '@/components/AppContext';
import { useState } from 'react';
import BookMatch from '@/components/BookMatch';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider attribute="class">
      <AppContext.Provider value={{ isOpen, setIsOpen }}>
        <main>
          <Navbar />
          <BookMatch />
          <Hero />
          <About />
          <Contact />
        </main>
      </AppContext.Provider>
    </ThemeProvider>
  );
}
