export interface Experience {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  guideId: string;
  category: string;
}

export interface Guide {
  id: string;
  name: string;
  image: string;
  languages: string[];
  specialty: string[];
  bio: string;
}

export const guides: Guide[] = [
  {
    id: "alexander-miller",
    name: "Alexander Miller",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    languages: ["Portuguese", "English", "Arabic"],
    specialty: ["Private City Tours", "Desert Expert", "Cultural Heritage"],
    bio: "Guiding travelers through Dubai with a focus on clarity, comfort and authentic experiences. My mission is to reveal the hidden stories that only a local perspective can offer."
  },
  {
    id: "joao-silva",
    name: "João Silva",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    languages: ["Portuguese", "Spanish"],
    specialty: ["Local Markets", "Street Food", "History"],
    bio: "Especialista em roteiros fora do comum para brasileiros. Conheça o Dubai real além dos arranha-céus."
  }
];

export const experiences: Experience[] = [
  {
    id: "private-desert-safari",
    title: "Private Desert Safari",
    location: "Dubai, UAE",
    price: 800,
    duration: "6h",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=800&auto=format&fit=crop",
    guideId: "alexander-miller",
    category: "Nature"
  },
  {
    id: "yacht-sunset-route",
    title: "Yacht Sunset Route",
    location: "Marina Dubai",
    price: 1200,
    duration: "4h",
    image: "https://images.unsplash.com/photo-1544413647-ad349005086d?q=80&w=800&auto=format&fit=crop",
    guideId: "alexander-miller",
    category: "Luxury"
  },
  {
    id: "city-cultural-tour",
    title: "City Cultural Tour",
    location: "Old Dubai",
    price: 500,
    duration: "5h",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    guideId: "joao-silva",
    category: "Culture"
  }
];
