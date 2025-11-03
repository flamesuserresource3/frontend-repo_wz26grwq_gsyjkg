import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-8 text-white shadow-2xl shadow-black/40">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Built for teams that value trust</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> SOC 2 Type II in progress</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> End-to-end encryption by default</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /> GDPR & CCPA ready</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm text-white/60">Join the waitlist to get updates, invites, and implementation guides when we launch.</p>
            <form id="signup" className="mt-4 flex w-full gap-2">
              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-emerald-400/20 focus:ring-2"
              />
              <button type="submit" className="whitespace-nowrap rounded-lg bg-emerald-500 px-4 py-3 text-sm font-medium text-black hover:bg-emerald-400">
                Join waitlist
              </button>
            </form>
            <p className="mt-2 text-xs text-white/40">We’ll never share your email.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-6 opacity-70">
        <span className="text-xs text-white/50">Backed by builders from</span>
        <div className="flex items-center gap-6 text-white/60">
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs">Stripe</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs">Cloudflare</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs">Coinbase</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs">Shopify</span>
        </div>
      </div>
    </section>
  );
}
