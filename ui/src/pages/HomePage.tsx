// src/pages/HomePage.js
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import VideoPlayer from "../components/VideoPlayer";
import VideoList from "../components/VideoList";
import Transcript from "../components/Transcript";
import NavBar from "../components/NavBar";
import { fetchMockVideos } from "../__mocks__/mockApi";
import VideoControls from "../components/VideoControls";

const HomePage = () => {
  const [videos, setVideos] = useState([]); // This will store the search results
  const [selectedVideo, setSelectedVideo] = useState(null); // This will store the selected video for the player

  const handleSearch = (searchTerm) => {
    fetchMockVideos(searchTerm).then((response) => {
      // Assuming the response structure is the same as the mockApiResponse
      setVideos(response.results);
    });
  };

  const handleSelectVideo = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };

  return (
    <>
      <NavBar />

      <div class="container mt-4">
        <SearchBar onSearch={handleSearch} />

        <div class="row">
          <div class="col-12">
            {/*TODO: make the   */}
            {videos.length > 0 && (
              <h2>
                How to pronounce hi in English (1 out of {videos.length}):
              </h2>
            )}
            {selectedVideo && selectedVideo.id && (
              <>
                <VideoPlayer video={selectedVideo} />

                <VideoControls />

                <Transcript vid={selectedVideo.vid} />
              </>
            )}
          </div>
        </div>

        <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kQtW33rZJAHjy8C4JlDjLlF5B5mPT3FQpXjFN9gDu/5LMkGp3Z5n3jF3sl6NXQ2H"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default HomePage;
