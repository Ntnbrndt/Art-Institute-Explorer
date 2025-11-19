import { useEffect, useState } from "react";
import ArtworkCard from "./ArtWorkCard";
import type { Artwork } from "../artworkSchema";

type HomePageProps = {
  onSelectArtwork: (artwork: Artwork) => void;
};


export default function HomePage({ onSelectArtwork }: HomePageProps) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    async function fetchArtworks() {
      const randomPage = Math.floor(Math.random() * 100) + 1;

      const res = await fetch(
          `https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=25&fields=id,title,date_display,image_id,thumbnail,artist_display,place_of_origin,description,short_description,dimensions,artist_title`
      );

      const json = await res.json();

      const mapped = json.data.map(a => ({
        ...a,
        imageUrl: a.image_id
          ? `https://www.artic.edu/iiif/2/${a.image_id}/full/400,/0/default.jpg`
          : "/placeholder.jpg",
      }));

      setArtworks(mapped);
    }
    fetchArtworks();
  }, []);

  return (
    <div className="cards-grid">
      {artworks.map(a => (
        <ArtworkCard key={a.id} artwork={a} onClick={() => onSelectArtwork(a)} />
      ))}
    </div>
  );
}

