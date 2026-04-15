import Link from "next/link";
import { experiences } from "@/lib/data";

export default function ExplorePage() {
  const categories = ["City", "Nature", "Luxury", "Culture", "Private Yacht", "Dining"];
  
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Minimalista (Fixo ou Scroll) */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-40 px-6 py-4 flex items-center justify-between border-b border-foreground/5">
        <Link href="/" className="text-[17px] font-semibold tracking-tight">Explore</Link>
        <div className="md:flex gap-6 hidden">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-apple-gray rounded-full px-4 py-1 text-[14px] outline-none"
          />
        </div>
      </header>

      <main className="px-6 pt-8 max-w-6xl mx-auto">
        {/* Filtros de Categoria (Padrão Apple: Minimalista e horizontal) */}
        <section className="mb-12 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 min-w-max">
            {categories.map((cat, idx) => (
              <button 
                key={cat}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all ${idx === 0 ? 'bg-foreground text-white' : 'bg-apple-gray text-foreground/60 hover:bg-apple-gray/80'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Listagem Curada */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {experiences.map(exp => (
              <ExperienceItem key={exp.id} {...exp} />
            ))}
          </div>
        </section>
      </main>

       {/* Bottom Navigation (Mobile) */}
       <footer className="md:hidden fixed bottom-0 w-full h-[84px] glass border-t border-foreground/5 flex items-center justify-around px-6 pb-2 z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-foreground/30">
          <HomeIcon />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href="/explore" className="flex flex-col items-center gap-1 text-foreground">
          <ExploreIcon />
          <span className="text-[10px] font-medium">Explore</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-foreground/30 opacity-30">
          <BookingIcon />
          <span className="text-[10px] font-medium">Bookings</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-foreground/30 opacity-30">
          <ProfileIcon />
          <span className="text-[10px] font-medium">Profile</span>
        </div>
      </footer>
    </div>
  );
}

function ExperienceItem({ id, title, price, duration, guideId, image }: any) {
  return (
    <Link href={`/guide/${guideId}`} className="group cursor-pointer">
      <div className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-apple-gray mb-4 shadow-apple transition-all duration-500 hover:shadow-apple-hover">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 ring-1 ring-white/10 rounded-full bg-black/20 backdrop-blur-md p-2">
           <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="text-[17px] font-semibold tracking-tight text-foreground">{title}</h3>
        </div>
        <p className="text-[14px] text-foreground/40 font-medium">{guideId}</p>
        <div className="flex items-center gap-2 text-[14px] text-foreground font-semibold mt-1">
          <span>AED {price}</span>
          <span className="text-foreground/20">•</span>
          <span className="text-foreground/50 font-medium">{duration}</span>
        </div>
      </div>
    </Link>
  );
}

function HomeIcon() { return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>; }
function ExploreIcon() { return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>; }
function BookingIcon() { return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>; }
function ProfileIcon() { return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>; }
