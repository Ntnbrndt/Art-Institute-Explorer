import { useState } from "react";
import React from "react";


export default function Header() {
    const [currentPage, setCurrentPage] = useState<"home" | "detail" | "gallery">("home");
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    function handleSelectArtwork(artwork: Artwork) {
        setSelectedArtwork(artwork);
        setCurrentPage("detail");
    }

    function goHome() {
        setCurrentPage("home");
    }

    return(
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
        </>
    );
}