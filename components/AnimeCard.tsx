import Image from "next/image";
import Link from "next/link";
import { Star, Play, CheckCircle, Clock } from "@phosphor-icons/react";

export interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  status: "Ongoing" | "Completed" | "Resume";
  genres: string[];
}

export default function AnimeCard({ id, title, image, rating, status, genres }: AnimeCardProps) {
  const statusConfig = {
    Ongoing: { icon: <Clock weight="bold" className="w-3 h-3" />, label: "Ongoing", color: "text-yellow-400" },
    Completed: { icon: <CheckCircle weight="bold" className="w-3 h-3" />, label: "Completed", color: "text-green-400" },
    Resume: { icon: <Play weight="fill" className="w-3 h-3" />, label: "Lanjutkan", color: "text-primary" },
  };

  const currentStatus = statusConfig[status] || statusConfig.Ongoing;

  return (
    <Link 
      href={`/anime/${id}`}
      className="group relative rounded-2xl overflow-hidden bg-card-dark border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col block"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />

        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10 z-10">
          <Star weight="fill" className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span className="text-xs font-semibold text-white">{rating > 0 ? rating.toFixed(1) : "N/A"}</span>
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10 z-10">
          <span className={currentStatus.color}>{currentStatus.icon}</span>
          <span className="text-[10px] font-medium uppercase tracking-wider text-white">{currentStatus.label}</span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-sm font-semibold text-white line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1.5">
          {genres.slice(0, 2).map((g, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-600" />}
              {g}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
