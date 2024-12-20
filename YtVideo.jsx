import React from 'react';

export const YTvideos = () => {
    return (
        <div>
            <h1>Videos</h1>

            <p>Pr Nmirach LAB : React JS</p>

            <iframe
                width="700"
                height="315"
                src="https://www.youtube.com/embed/XWePdlCGTno"
                title="YouTube video player"
                frameorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
};

