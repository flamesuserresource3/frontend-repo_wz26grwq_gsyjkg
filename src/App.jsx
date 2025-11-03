import React from 'react';
import Hero from './components/Hero';
import CodeSnippet from './components/CodeSnippet';
import Features from './components/Features';
import TrustSection from './components/TrustSection';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <main>
        <CodeSnippet />
        <Features />
        <TrustSection />
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Vanish — Passwordless auth that disappears.
      </footer>
    </div>
  );
}
