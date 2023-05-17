import React from "react";
import newyear from "../imgs/happynewyear.jpg";
import announc from "../imgs/announcement.jpg";
import trivia from "../imgs/trivianight.jpg";

function Home() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={trivia} class="carousel-img" alt="Trivia" />
        </div>
        <div class="carousel-item">
          <img
            src={announc}
            class="carousel-img"
            alt="Announcement"
          />
        </div>
        <div class="carousel-item">
          <img
            src={newyear}
            class="carousel-img"
            alt="New Year"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
