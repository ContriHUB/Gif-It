import React from "react";
import "../styles/VideoListItem.css";

const VideoListItem = ({ videoItem, setVideoDetails }) => {
    const videoId = videoItem.id.videoId;
    const url = "https://youtube.com/embed/" + videoId;
//
    return (
        <div className="VideoListItem">
            

            {/* TODO: ISSUE: Make this Video to Open inside the Player, instead
            of playing in separate Page. */}
            <a style={{ padding: "5px", cursor: "pointer" }} onClick={(e) => {
                        setVideoDetails((prev) => {
                            return {
                                ...prev,
                                video: videoItem,
                            };
                        });
            }}>
            <p>
                <img
                width="100px"
                height="100px"
                // TODO: ISSUE: Make this image to be the thumbnail of the Current Video
                src="http://github.com/ankitsangwan1999.png"
                alt="Ankit"/>
                {videoItem.snippet.title}
            </p>
            </a>
        </div>
    );
};

export default VideoListItem;
