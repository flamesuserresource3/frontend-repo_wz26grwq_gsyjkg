import React, { useState } from 'react';
import { Copy, CheckCircle, Github } from 'lucide-react';

const snippets = {
  javascript: `import { Auth } from '@vanishdev/auth';

Auth.init({ key: process.env.VANISH_PUBLIC_KEY });

// One line biometric login
await Auth.login();`,
  python: `from vanish import Auth

Auth.init(key=os.environ['VANISH_PUBLIC_KEY'])

# One line biometric login
Auth.login()`
};

export default function CodeSnippet() {
  const [lang, setLang] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const code = snippets[lang];

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // noop
    }
  };

  return (
    <section id="docs" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Integrate in seconds</h2>
          <p className="mt-1 text-sm text-white/60">End-to-end passwordless with a single import. Works on web and mobile.</p>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
        >
          <Github className="h-4 w-4" /> Star on GitHub
        </a>
      </div>

      <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-3 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <button
              onClick={() => setLang('javascript')}
              className={`rounded px-2 py-1 ${lang === 'javascript' ? 'bg-white/10 text-white' : ''}`}
            >
              JavaScript
            </button>
            <button
              onClick={() => setLang('python')}
              className={`rounded px-2 py-1 ${lang === 'python' ? 'bg-white/10 text-white' : ''}`}
            >
              Python
            </button>
          </div>
          <button
            onClick={onCopy}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10"
          >
            {copied ? (
              <>
                <CheckCircle className="h-4 w-4 text-emerald-400" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy
              </>
            )}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-white/90"><code>{code}</code></pre>
      </div>
    </section>
  );
}
