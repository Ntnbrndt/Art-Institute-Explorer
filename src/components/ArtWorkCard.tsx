import type { Artwork } from "../artworkSchema";


type ArtworkCardProps = {
  artwork: Artwork;
  onClick?: () => void;
};

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
return (
    <button className="card" onClick={onClick}>
    <img src={artwork.imageUrl} alt={artwork.title} />
    <h3>{artwork.title} ({artwork.date_display})</h3>
    <p>{artwork.artist_title}</p>
    <p>{artwork.thumbnail?.alt_text || "No description available."}</p>
  </button>
);
}
