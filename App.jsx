import { YTvideos } from './YtVideo';
import React, { useState, useEffect } from 'react';
import { fetchVideos } from './youtubeAPI';
import VideoList from './VideoListe';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos('React tutorials');
      setVideos(fetchedVideos);
    };
    loadVideos();
  }, []);

  return (
    <div>
      <h1>YouTube Videos</h1>
      <VideoList videos={videos} />
    </div>
  );
}

export default App

