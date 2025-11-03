import React from 'react';
import { Shield, Fingerprint, Zap, Lock } from 'lucide-react';

const items = [
  {
    icon: Fingerprint,
    title: 'Biometrics out-of-the-box',
    desc: 'Face ID, Touch ID, and platform passkeys with zero maintenance.',
  },
  {
    icon: Shield,
    title: 'Phishing-resistant',
    desc: 'WebAuthn-based flows eliminate passwords and OTP fatigue.',
  },
  {
    icon: Zap,
    title: 'One line integration',
    desc: 'A single call handles sign-up, sign-in, and session refresh.',
  },
  {
    icon: Lock,
    title: 'Zero secret handling',
    desc: 'Keys are stored on-device. Nothing sensitive touches your servers.',
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-xl font-semibold text-white">Why builders choose us</h2>
        <p className="mt-2 text-sm text-white/60">
          Reduce drop-off, harden security, and ship faster with a developer-first auth platform.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/30 transition hover:translate-y-[-2px] hover:bg-white/[0.05]"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/60">{desc}</p>
            <div className="pointer-events-none absolute inset-px rounded-2xl opacity-0 ring-1 ring-emerald-400/30 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
