/* image from GPT for later
function ArtworkImage({ artwork, config }: { artwork: Data; config: Config }) {
    const imageUrl = `${config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`;
  
    return <img src={imageUrl} alt={artwork.thumbnail.alt_text} />;
  }
  */ 
 //look for: you will need config.iiif_url


import { useEffect, useState } from "react";
import ArtworkCard from "./ArtWorkCard";
import type { Artwork } from "../artworkSchema";


export default function Gallery() {
  const [gallery, setGallery] = useState<Artwork[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("gallery") || "[]");
    setGallery(saved);
  }, []);

  if (gallery.length === 0) {
    return <p>Your gallery is empty.</p>;
  }

  return (
    <div className="cards-grid">
      {gallery.map(a => (
        <ArtworkCard 
          key={a.id} 
          artwork={a}
        />
      ))}
    </div>
  );
}
