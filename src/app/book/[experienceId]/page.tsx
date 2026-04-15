'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    date: '',
    duration: '',
    guests: 1,
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-white">
      {/* Header Booking */}
      <nav className="h-16 px-6 flex items-center justify-between border-b border-foreground/5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <button onClick={prevStep} className={`flex items-center gap-2 text-foreground/60 hover:text-foreground ${step === 1 ? 'invisible' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          <span className="text-[14px] font-medium">Back</span>
        </button>
        <span className="text-[15px] font-semibold">Step {step} of 5</span>
        <Link href="/explore" className="text-foreground/40 hover:text-foreground">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">
        {step === 1 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-[34px] font-semibold tracking-tight mb-8">When are you going?</h1>
            <div className="grid grid-cols-7 gap-2 mb-12">
               {/* Simulação simplificada de calendário para o MVP */}
               {Array.from({length: 31}).map((_, i) => (
                 <button 
                  key={i} 
                  onClick={() => { setData({...data, date: `May ${i+1}`}); nextStep(); }}
                  className="aspect-square flex items-center justify-center rounded-full text-[15px] font-medium hover:bg-apple-gray transition-colors"
                 >
                   {i+1}
                 </button>
               ))}
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-[34px] font-semibold tracking-tight mb-8">How long for?</h1>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { setData({...data, duration: '4h'}); nextStep(); }}
                className="p-6 bg-apple-gray rounded-[18px] text-left hover:bg-foreground hover:text-white transition-all group"
              >
                <div className="text-[19px] font-semibold">4 hours</div>
                <div className="text-[14px] opacity-60">Half day • Morning or Evening</div>
              </button>
              <button 
                onClick={() => { setData({...data, duration: '8h'}); nextStep(); }}
                className="p-6 bg-apple-gray rounded-[18px] text-left hover:bg-foreground hover:text-white transition-all group"
              >
                <div className="text-[19px] font-semibold">8 hours</div>
                <div className="text-[14px] opacity-60">Full day • Complete experience</div>
              </button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-[34px] font-semibold tracking-tight mb-8">How many guests?</h1>
            <div className="flex flex-col items-center gap-12 py-12">
               <div className="flex items-center gap-10">
                 <button 
                  onClick={() => setData({...data, guests: Math.max(1, data.guests - 1)})}
                  className="w-16 h-16 rounded-full bg-apple-gray flex items-center justify-center text-[24px] font-semibold"
                 >-</button>
                 <span className="text-[64px] font-light tracking-tight">{data.guests}</span>
                 <button 
                  onClick={() => setData({...data, guests: data.guests + 1})}
                  className="w-16 h-16 rounded-full bg-apple-gray flex items-center justify-center text-[24px] font-semibold"
                 >+</button>
               </div>
               <button onClick={nextStep} className="w-full btn-apple-primary">Continue</button>
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-[34px] font-semibold tracking-tight mb-8">Review your booking</h1>
            <div className="bg-apple-gray rounded-[18px] p-6 flex flex-col gap-6 mb-12">
               <div className="flex justify-between border-b border-foreground/5 pb-4">
                 <span className="text-foreground/40 font-medium">Guide</span>
                 <span className="font-semibold">Alexander Miller</span>
               </div>
               <div className="flex justify-between border-b border-foreground/5 pb-4">
                 <span className="text-foreground/40 font-medium">Date</span>
                 <span className="font-semibold">{data.date}</span>
               </div>
               <div className="flex justify-between border-b border-foreground/5 pb-4">
                 <span className="text-foreground/40 font-medium">Duration</span>
                 <span className="font-semibold">{data.duration}</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-foreground/40 font-medium">Guests</span>
                 <span className="font-semibold">{data.guests}</span>
               </div>
            </div>
            <div className="flex justify-between items-center mb-12">
              <span className="text-[21px] font-semibold">Total</span>
              <span className="text-[21px] font-bold">AED 1600</span>
            </div>
            <button onClick={nextStep} className="w-full btn-apple-primary">Go to Payment</button>
          </section>
        )}

        {step === 5 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
            <h1 className="text-[34px] font-semibold tracking-tight mb-8">Payment</h1>
            <div className="py-20 flex flex-col items-center gap-8">
               {/* Apple Pay Button Mock */}
               <button onClick={() => alert('MVP: Redirecting to Apple Pay...')} className="w-full bg-black text-white h-[64px] rounded-[12px] flex items-center justify-center gap-2">
                  <span className="text-[20px] font-semibold"> Pay</span>
               </button>
               <button className="text-[14px] font-medium text-foreground/40 hover:text-foreground">
                  Pay with Credit Card
               </button>
            </div>
            <p className="text-[12px] text-foreground/30">
              Securely processed by Stripe. You won't be charged until the guide confirms.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
