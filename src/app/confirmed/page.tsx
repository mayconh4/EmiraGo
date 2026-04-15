import Link from 'next/link';

export default function ConfirmedPage() {
  return (
    <div className="min-h-screen bg-white">
       <nav className="h-16 px-6 flex items-center justify-between border-b border-foreground/5 sticky top-0 bg-white z-50">
        <Link href="/" className="text-[15px] font-semibold">Excellence</Link>
        <div className="flex gap-4">
           <div className="w-8 h-8 rounded-full bg-apple-gray overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" />
           </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 pt-16">
        {/* Success Signature */}
        <div className="flex flex-col items-center text-center mb-16">
           <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
           </div>
           <h1 className="text-[34px] font-semibold tracking-tight">You&#39;re all set!</h1>
           <p className="text-[17px] text-foreground/40 mt-2">Your booking request has been sent to Alexander.</p>
        </div>

        {/* Itinerary Details */}
        <section className="mb-16">
           <h2 className="text-[14px] font-semibold uppercase tracking-[0.05em] text-foreground/40 mb-6">Your Experience</h2>
           <div className="flex gap-6 items-center p-6 border border-foreground/5 rounded-[18px]">
              <div className="w-24 h-24 rounded-[12px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover"/>
              </div>
              <div className="flex flex-col gap-1">
                 <h3 className="text-[19px] font-semibold">Private Desert Safari</h3>
                 <p className="text-[15px] text-foreground/60 font-medium">May 24 • 8 hours</p>
                 <span className="text-[13px] text-apple-blue font-semibold">Awaiting guide confirmation</span>
              </div>
           </div>
        </section>

        {/* Chat Interface Mockup */}
        <section className="pb-24">
           <h2 className="text-[14px] font-semibold uppercase tracking-[0.05em] text-foreground/40 mb-6">Message Alexander</h2>
           <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-apple-gray mt-1"></div>
                 <div className="bg-apple-gray px-4 py-2 rounded-[18px] text-[15px]">
                    Hello! I&#39;m looking forward to our desert safari. Do you have any dietary restrictions?
                 </div>
              </div>
              <div className="flex gap-3 justify-end">
                 <div className="bg-foreground text-white px-4 py-2 rounded-[18px] text-[15px]">
                    No restrictions, thanks!
                 </div>
              </div>
           </div>
           <div className="mt-8 relative">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="w-full h-14 bg-apple-gray rounded-[18px] px-6 outline-none focus:bg-white border border-transparent focus:border-foreground/5 transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-apple-blue font-semibold">Send</button>
           </div>
        </section>
      </main>

      <footer className="fixed bottom-0 w-full p-6 bg-white border-t border-foreground/5 flex flex-col gap-3">
         <Link href="/" className="w-full btn-apple-secondary text-center">Back to Home</Link>
      </footer>
    </div>
  );
}
