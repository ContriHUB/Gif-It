import React from "react";
import VideoListItem from "./VideoListItem";
import "../styles/VideoSuggestions.css";

const VideoSuggestions = ({ videosList, setVideoDetails }) => {
    return (
        <div className="VideoSuggestions">
            {videosList.map((video, index) => {
                return index > 0 ?
                    < VideoListItem key={video.etag} videoItem={video} setVideoDetails={setVideoDetails}/>
                    :
                    <div></div>
            })}
        </div>
    );
};

export default VideoSuggestions;
