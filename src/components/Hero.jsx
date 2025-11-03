import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Private beta now open
        </span>
        <h1 className="font-display bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Auth that disappears.
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sm text-white/70 sm:text-base">
          Passwordless authentication for modern apps. Drop-in biometrics and magic links with a single line of code.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Get early access
          </a>
          <a
            href="#docs"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/10"
          >
            Read the docs
          </a>
        </div>
        <div className="mt-6 text-center text-xs text-white/50">
          No passwords. No friction. Higher conversions.
        </div>
      </div>
    </section>
  );
}
