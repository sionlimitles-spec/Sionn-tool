import Image from "next/image";
import { Star, Play, CheckCircle, Clock } from "@phosphor-icons/react/dist/ssr";

interface AnimeCardProps {
  title: string;
    image: string;
      rating: number;
        status: "Ongoing" | "Completed" | "Resume";
          genres: string[];
          }

          export default function AnimeCard({ title, image, rating, status, genres }: AnimeCardProps) {
            // Konfigurasi badge status
              const statusConfig = {
                  Ongoing: { icon: <Clock weight="bold" className="w-3 h-3" />, label: "Ongoing" },
                      Completed: { icon: <CheckCircle weight="bold" className="w-3 h-3" />, label: "Completed" },
                          Resume: { icon: <Play weight="fill" className="w-3 h-3" />, label: "Lanjutkan" },
                            };

                              const currentStatus = statusConfig[status];

                                return (
                                    <div className="group relative rounded-2xl overflow-hidden bg-[#131823] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                                          {/* Poster Image */}
                                                <div className="relative aspect-[3/4] w-full">
                                                        <Image
                                                                  src={image}
                                                                            alt={title}
                                                                                      fill
                                                                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                                                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                                                                  />

                                                                                                                          {/* Overlay Gradient Bawah */}
                                                                                                                                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />

                                                                                                                                          {/* 🔥 BADGE RATING (Kiri Atas) */}
                                                                                                                                                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
                                                                                                                                                            <Star weight="fill" className="w-3.5 h-3.5 text-[#F59E0B]" />
                                                                                                                                                                      <span className="text-xs font-semibold text-white">{rating.toFixed(1)}</span>
                                                                                                                                                                              </div>

                                                                                                                                                                                      {/* 🔥 BADGE STATUS (Kanan Atas) */}
                                                                                                                                                                                              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-[#0B0F19]/80 backdrop-blur-md px-2.5 py-1 border border-white/10 text-white">
                                                                                                                                                                                                        {currentStatus.icon}
                                                                                                                                                                                                                  <span className="text-[10px] font-medium uppercase tracking-wider">{currentStatus.label}</span>
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                      {/* Info Bawah */}
                                                                                                                                                                                                                                            <div className="p-4 space-y-1.5">
                                                                                                                                                                                                                                                    <h3 className="text-sm font-semibold text-white line-clamp-1 group-hover:text-[#22D3EE] transition-colors">
                                                                                                                                                                                                                                                              {title}
                                                                                                                                                                                                                                                                      </h3>
                                                                                                                                                                                                                                                                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                                                                                                                                                                                                                                                                        {genres.slice(0, 2).map((g, i) => (
                                                                                                                                                                                                                                                                                                    <span key={i} className="flex items-center gap-1">
                                                                                                                                                                                                                                                                                                                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-600" />}
                                                                                                                                                                                                                                                                                                                                {g}
                                                                                                                                                                                                                                                                                                                                            </span>
                                                                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                          }