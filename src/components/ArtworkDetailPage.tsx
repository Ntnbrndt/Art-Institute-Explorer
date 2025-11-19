import type { Artwork } from "../artworkSchema";



type ArtworkDetailProps = {
    artwork: Artwork;
    goBack: () => void;
    addToGallery: (artwork: Artwork) => void;
  };
  

export default function ArtworkDetailPage({ artwork, goBack, addToGallery}: ArtworkDetailProps) {
    return (
      <div className="detail-page">
        <button onClick={goBack}>← Back</button>
  
        <img src={artwork.imageUrl} alt={artwork.title} />
  
        <h2>{artwork.title}</h2>
        <p><strong>Artist:</strong> {artwork.artist_display}</p>
        <p><strong>Year:</strong> {artwork.date_display}</p>
        <p><strong>Description:</strong> {artwork.thumbnail?.alt_text || "No description"}</p>

        <button onClick={() => addToGallery(artwork)}>
            Add to Gallery
        </button>

      </div>
    );
  }
  
 