
import { useEffect, useState } from "react";
import ArtWork from "./ArtWork";

export default function HomePage({ onSelectArtwork }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    async function fetchArtworks() {
      const res = await fetch(
        "https://api.artic.edu/api/v1/artworks?limit=12&fields=id,title,date_display,image_id,thumbnail"
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
        <ArtWork key={a.id} artwork={a} onClick={() => onSelectArtwork(a)} />
      ))}
    </div>
  );
}
