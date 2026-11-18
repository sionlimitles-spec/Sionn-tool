                                                                                                                                                                                                                                                                                       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                                                                                                                                                                                                                                                                                                                                                                                                   <AnimeCard 
                                                                                                                                                                                                                                                                                                                                                                                                                               title="Solo Leveling" 
                                                                                                                                                                                                                                                                                                                                                                                                                                           image="/solo-leveling.jpg" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                       rating={9.2} 
                                         import AnimeCard from "@/components/AnimeCard";
import { Play, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { getTrendingAnime } from "@/lib/api";

export default async function Home() {
  const trendingAnime = await getTrendingAnime();

  return (
    <main className="min-h-screen bg-bg-dark text-white p-6 md:p-12 max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-12">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Sparkle weight="fill" className="text-primary" /> Nonton
        </h1>
        <div className="flex gap-4 text-sm text-gray-400 font-medium">
           <span className="hover:text-white cursor-pointer transition">Home</span>
           <span className="hover:text-white cursor-pointer transition">Movies</span>
           <span className="hover:text-white cursor-pointer transition">My List</span>
        </div>
      </header>

      <section className="relative rounded-3xl overflow-hidden mb-16 aspect-[21/9] md:aspect-[3/1] border border-white/10 group cursor-pointer">
         <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent z-10" />
         <img src="https://placehold.co/1920x600/131823/22D3EE?text=Featured+Anime" alt="Hero" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
         
         <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-16 max-w-xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Featured Anime</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">The New Adventure</h2>
            <div className="flex items-center gap-3 text-sm text-gray-300 mb-6 font-medium">
              <span>Fantasy</span><span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>Action</span><span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>Adventure</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-8 line-clamp-2">
              Petualangan epik di dunia penuh misteri dan kekuatan luar biasa.
            </p>
            <button className="flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-full w-fit hover:bg-cyan-300 transition-colors">
              <Play weight="fill" /> Mulai Nonton
            </button>
         </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Anime</h2>
          <span className="text-sm text-primary cursor-pointer hover:underline font-medium">Lihat semua</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingAnime.map((anime) => (
            <AnimeCard 
              key={anime.id}
              id={anime.id}
              title={anime.title} 
              image={anime.image} 
              rating={anime.rating} 
              status={anime.status} 
              genres={anime.genres} 
            />
          ))}
          
          {trendingAnime.length === 0 && (
            <div className="col-span-full py-12 text-center border border-white/5 rounded-2xl bg-card-dark">
              <p className="text-gray-500">Data anime belum tersedia atau API sedang down.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                          status="Completed" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               genres={["Action", "Fantasy"]} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <AnimeCard 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               title="Demon Slayer" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           image="/demon-slayer.jpg" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       rating={8.9} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   status="Ongoing" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               genres={["Action", "Supernatural"]} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   {/* Tambah anime lain di sini */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }
