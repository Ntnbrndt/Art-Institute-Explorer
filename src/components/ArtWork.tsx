
import React from 'react';

export default function ArtWork() {
    const year = 2023; // Example year
    return (
        <div className="artworkcard">
            <img src="https://via.placeholder.com/300x200" alt="Art Image" className="art-img" />
            <div className="artworkcard-content">
                <h3 className="Art-title">Art Title {year}</h3>
                <p className="card-text">Artwork description (short or long?)</p>
                <button className="card-button">More Info</button>
            </div>
        </div>
    );
}
