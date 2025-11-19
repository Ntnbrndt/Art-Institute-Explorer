import React from "react";
import { useState } from 'react';
import HomePage from "./components/HomePage";
import ArtworkDetailPage from './components/ArtworkDetailPage';
import Gallery from "./components/Gallery";
import type { Artwork } from "./artworkSchema";

import './App.css'


function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "detail" | "gallery">("home");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  function handleSelectArtwork(artwork: Artwork) {
    setSelectedArtwork(artwork);
    setCurrentPage("detail");
  }

  function goHome() {
    setCurrentPage("home");
  }

  function addToGallery(artwork: Artwork) {
    const saved = JSON.parse(localStorage.getItem("gallery") || "[]");
  
    if (!saved.find(a => a.id === artwork.id)) {
      saved.push(artwork);
    }
  
    localStorage.setItem("gallery", JSON.stringify(saved));
  }


  return (
    <>
      <header>
            <button onClick={goHome}> 
            <h1>Art Institute Explorer</h1>
            </button>
            <div>
            <button onClick={goHome}>Home</button>
            <button onClick={() => setCurrentPage("gallery")}>Gallery</button>
            </div>
      </header>
      
      {currentPage === "home" && (
        <HomePage onSelectArtwork={handleSelectArtwork} />
      )}

      {currentPage === "detail" && selectedArtwork && (
        <ArtworkDetailPage artwork={selectedArtwork} goBack={goHome} addToGallery={addToGallery}/>
      )}
      
      {currentPage === "gallery" && <Gallery/>}
    </>
  )
}

export default App
