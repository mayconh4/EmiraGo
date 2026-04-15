'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { guides, experiences } from '@/lib/data';

export default function GuideProfilePage() {
  const params = useParams();
  const guideId = params.id as string;
  
  const guide = guides.find(g => g.id === guideId);
  const guideExperiences = experiences.filter(e => e.guideId === guideId);

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Guide not found</h1>
          <Link href="/explore" className="text-apple-blue hover:underline">Back to Explore</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-32">
       {/* Top Nav Discreta */}
       <nav className="h-16 px-6 flex items-center justify-between border-b border-foreground/5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/explore" className="flex items-center gap-2 text-foreground/60 hover:text-foreground">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          <span className="text-[14px] font-medium">Back</span>
        </Link>
        <span className="text-[15px] font-semibold">Guide Profile</span>
        <div className="w-10"></div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Coluna Imagem (Foco Total) */}
          <div className="relative aspect-[3/4] rounded-[18px] overflow-hidden shadow-apple bg-apple-gray">
            <img 
              src={guide.image} 
              alt={guide.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Coluna Texto (Trust Design) */}
          <div className="flex flex-col">
            <h1 className="text-[34px] font-semibold tracking-tight mb-2">{guide.name}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {guide.specialty.map(s => (
                <span key={s} className="px-3 py-1 bg-apple-gray rounded-full text-[12px] font-medium text-foreground/60">
                  {s}
                </span>
              ))}
            </div>

            <section className="mb-10">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.05em] text-foreground/40 mb-3">Languages</h2>
              <p className="text-[15px] font-medium text-foreground">{guide.languages.join(" • ")}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.05em] text-foreground/40 mb-3">About</h2>
              <p className="text-[17px] leading-relaxed text-foreground/80 font-light">
                {guide.bio}
              </p>
            </section>

             {/* Booking Card Desktop (Inline) */}
             <div className="p-6 bg-apple-gray rounded-[18px] mt-4 border border-foreground/5 md:block hidden">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[15px] font-semibold">{guideExperiences[0]?.title || 'Private Tour'}</span>
                  <span className="text-[14px] text-foreground/40">From AED {guideExperiences[0]?.price || '---'}</span>
                </div>
                {guideExperiences[0] && (
                  <Link href={`/book/${guideExperiences[0].id}`} className="w-full block">
                    <button className="w-full btn-apple-primary">
                      Reserve Experience
                    </button>
                  </Link>
                )}
             </div>
          </div>
        </div>

        {/* Listagem de Experiências Adicionais */}
        <section className="mt-20">
          <h2 className="text-[21px] font-semibold tracking-tight mb-8">Guided by {guide.name.split(" ")[0]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {guideExperiences.map(exp => (
               <Link key={exp.id} href={`/book/${exp.id}`} className="flex items-center gap-4 p-4 border border-foreground/5 rounded-[12px] hover:bg-apple-gray transition-colors">
                  <div className="w-20 h-20 rounded-[8px] overflow-hidden">
                    <img src={exp.image} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold">{exp.title}</h4>
                    <p className="text-[13px] text-foreground/40 font-medium">{exp.duration} • AED {exp.price}</p>
                  </div>
               </Link>
             ))}
          </div>
        </section>
      </main>

      {/* Floating CTA (Mobile) */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full p-6 glass border-t border-foreground/5 flex items-center justify-between z-50">
        <div className="flex flex-col">
          <span className="text-[17px] font-semibold">AED {guideExperiences[0]?.price || '---'}</span>
          <span className="text-[12px] text-foreground/40 font-medium">Per tour</span>
        </div>
        {guideExperiences[0] && (
          <Link href={`/book/${guideExperiences[0].id}`}>
            <button className="px-8 py-4 bg-foreground text-white rounded-[12px] text-[15px] font-semibold transition-all active:scale-[0.98]">
              Book Tour
            </button>
          </Link>
        )}
      </footer>
    </div>
  );
}
