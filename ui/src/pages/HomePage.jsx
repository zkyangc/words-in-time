// src/pages/HomePage.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import VideoPlayer from '../components/VideoPlayer';
import VideoList from '../components/VideoList';
import Transcript from '../components/Transcript';
import { fetchMockVideos } from '../__mocks__/mockApi';

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
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Word in Time
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Last query
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Daily Lessons
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Submit
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Get your widget
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-success" type="submit">
                Donate
              </button>
            </form>
          </div>
        </div>
      </nav>

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
                <div className="video-buttons">
                  <button className="btn btn-secondary">
                    <i className="fas fa-step-backward"></i>
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-backward"></i>
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-play"></i>
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-forward"></i>
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-step-forward"></i>
                  </button>
                </div>
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
