// image from GPT for later
function ArtworkImage({ artwork, config }: { artwork: Data; config: Config }) {
    const imageUrl = `${config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`;
  
    return <img src={imageUrl} alt={artwork.thumbnail.alt_text} />;
  }

  // look for: Perfect — that means you will need config.iiif_url, because the API uses IIIF to serve images. Here’s how it works and how to handle it in your app