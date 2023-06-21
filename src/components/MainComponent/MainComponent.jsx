import React from "react";
// import { GrNext } from "react-icons/gr";
import { FaChevronRight, FaChevronLeft, FaPlay } from 'react-icons/fa';
// import { BsPerson } from "react-icons/bs";
import ReactPlayer from 'react-player';
// import course from "../../Images/course.png";
import "./MainComponent.css";
import Comment from "./Comment"

function MainComponent() {
  return (
    <>
      <div className="main-component">
        <div>
          <h1 className="started">Getting Started</h1>

          <p className="p-section">Hey there! You are finally here. Congratulations.</p>
           <p className="p-section">
            We have a short message for you. Listen and follow through we are
            sure you will do great
          </p>
          <br />
          <div className="course flex justify-center items-center">
            <FaPlay /> <h2 className="started"> Public administration </h2>
          </div>
        </div>

        {/* video section */}
        <div className="course-video">
          <ReactPlayer
          url="https://youtu.be/GK-VbhToLEI"
          controls
          width="100%"
          className="h-full"
          />
        </div>
          <br />
          <br />
          <Comment />
          <br />
      </div>
    </>
  );
}

export default MainComponent;
