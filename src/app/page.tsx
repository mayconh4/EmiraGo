'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { experiences } from "@/lib/data";

export default function Home() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/explore");
  };

  return (
    <div className="min-h-screen bg-white selection:bg-apple-blue/10 selection:text-apple-blue">
      {/* Header Minimalista */}
      <header className="fixed top-0 w-full h-16 flex items-center justify-between px-6 z-50 bg-white/50 backdrop-blur-md">
        <Link href="/" className="text-[17px] font-semibold tracking-tight text-foreground">
          Excellence
        </Link>
        <nav className="hidden md:flex gap-8 text-[14px] font-medium text-foreground/60">
          <Link href="/explore" className="hover:text-foreground transition-colors">Explore</Link>
          <Link href="#" className="hover:text-foreground transition-colors opacity-30 cursor-not-allowed">Bookings</Link>
          <Link href="#" className="hover:text-foreground transition-colors opacity-30 cursor-not-allowed">Profile</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center pt-[15vh] px-6">
        {/* Headline Apple Style */}
        <section className="text-center mb-12">
          <h1 className="text-[48px] md:text-[64px] font-semibold tracking-tight leading-tight mb-4">
            Where to next?
          </h1>
          <p className="text-[19px] md:text-[21px] text-foreground/40 max-w-lg mx-auto">
            Experience the world with the discretion and comfort of a private guide.
          </p>
        </section>

        {/* Search Bar - Spotlight Style */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl mb-24">
          <div className="group relative">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-foreground/30 group-focus-within:text-apple-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search for an experience or guide" 
              className="w-full h-16 bg-apple-gray rounded-[18px] pl-14 pr-6 text-[17px] outline-none border-[1px] border-transparent focus:bg-white focus:border-apple-blue/20 focus:ring-4 focus:ring-apple-blue/5 transition-all duration-400 placeholder:text-foreground/30"
            />
          </div>
        </form>

        {/* Curated Experiences (Suggestions) */}
        <section className="w-full max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[14px] font-semibold tracking-[0.05em] uppercase text-foreground/40">
              Suggested for you
            </h2>
            <Link href="/explore" className="text-[14px] font-medium text-apple-blue hover:underline">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
            {experiences.map(exp => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <footer className="md:hidden fixed bottom-0 w-full h-[84px] glass border-t border-foreground/5 flex items-center justify-around px-6 pb-2 z-50">
        <NavItem href="/explore" label="Explore" active={true} icon={<ExploreIcon />} />
        <NavItem href="#" label="Bookings" active={false} icon={<BookingIcon />} disabled />
        <NavItem href="#" label="Profile" active={false} icon={<ProfileIcon />} disabled />
      </footer>
    </div>
  );
}

function ExperienceCard({ id, title, location, price, duration, image, guideId }: any) {
  return (
    <Link href={`/guide/${guideId}`} className="group cursor-pointer">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-apple-gray mb-4 shadow-apple transition-all duration-500 hover:shadow-apple-hover">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[12px] font-semibold tracking-tight">
            Curated
          </span>
        </div>
      </div>
      <h3 className="text-[19px] font-semibold tracking-tight text-foreground mb-1">{title}</h3>
      <div className="flex items-center gap-2 text-[15px] text-foreground/40 font-medium">
        <span>AED {price}</span>
        <span>•</span>
        <span>{duration}</span>
      </div>
    </Link>
  );
}

function NavItem({ href, label, active, icon, disabled }: any) {
  return (
    <Link 
      href={href} 
      className={`flex flex-col items-center gap-1 ${active ? 'text-foreground' : 'text-foreground/30'} ${disabled ? 'cursor-not-allowed' : ''}`}
    >
      <div className="w-6 h-6">{icon}</div>
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}

/* Icons (Simplificados) */
function ExploreIcon() { return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>; }
function BookingIcon() { return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>; }
function ProfileIcon() { return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>; }
