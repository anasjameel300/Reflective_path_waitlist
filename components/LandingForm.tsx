import React, { useState } from 'react';
import { ArrowRight, Loader2, Check } from 'lucide-react';

// Replace this with your deployed Google Apps Script Web App URL
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

export const LandingForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [device, setDevice] = useState<'android' | 'ios'>('android');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      // Prepare data matching the Google Script's expected format
      const data = {
        email: email,
        timestamp: new Date().toISOString(),
        location: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
        device: device
      };

      // Send as JSON text to avoid CORS preflight issues while allowing the script to parse it
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'no-cors', // Google Apps Script often requires no-cors for simple POSTs from client-side
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      });

      // Since mode is 'no-cors', we can't read the response JSON.
      // We assume success if the network request didn't throw.
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#8da391]/20 border border-[#8da391] rounded-full text-[#8da391] animate-in zoom-in">
        <Check className="w-4 h-4" />
        <span className="text-sm font-medium">You're on the list. Talk soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">

      {/* Device Selection Toggle */}
      <div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl w-full">
        <button
          type="button"
          onClick={() => setDevice('android')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${device === 'android'
              ? 'bg-[#8da391] text-zinc-900 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-300'
            }`}
        >
          Android
        </button>
        <button
          type="button"
          onClick={() => setDevice('ios')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${device === 'ios'
              ? 'bg-[#8da391] text-zinc-900 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-300'
            }`}
        >
          iOS
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 text-zinc-200 focus:outline-none focus:border-[#8da391] transition-colors placeholder:text-zinc-600"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-4 bg-[#8da391] hover:bg-[#7a917e] text-zinc-900 font-medium rounded-xl transition-all shadow-lg shadow-[#8da391]/10 flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap"
        >
          {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Join Waitlist <ArrowRight className="w-4 h-4" /></>}
        </button>
      </div>
      {status === 'error' && <p className="text-red-400 text-xs mt-2 text-center w-full">Something went wrong. Please try again.</p>}
    </form>
  );
};