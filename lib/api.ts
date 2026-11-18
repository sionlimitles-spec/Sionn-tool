export interface AnimeData {
  id: string;
  title: string;
  image: string;
  rating: number;
  status: "Ongoing" | "Completed" | "Resume";
  genres: string[];
}

export async function getTrendingAnime(): Promise<AnimeData[]> {
  try {
    // Ganti URL di bawah ini dengan endpoint API Samehadaku milikmu
    const res = await fetch("https://api-samehadaku-kamu.vercel.app/recent", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Gagal mengambil data");

    const data = await res.json();
    
    // Mapping disesuaikan dengan struktur JSON API Samehadaku
    // (Asumsi struktur standar REST API scraper)
    return (data.data || data).map((anime: any, index: number) => ({
      id: anime.id || anime.slug || `anime-${index}`,
      title: anime.title,
      image: anime.poster || anime.thumb || "https://placehold.co/400x600/131823/22D3EE?text=No+Image",
      rating: parseFloat(anime.score || anime.rating || "0"),
      status: anime.status?.toLowerCase().includes("ongoing") ? "Ongoing" 
            : anime.status?.toLowerCase().includes("completed") ? "Completed" 
            : "Resume",
      genres: anime.genres ? anime.genres.map((g: any) => typeof g === 'string' ? g : g.name) : ["Anime"],
    }));
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
