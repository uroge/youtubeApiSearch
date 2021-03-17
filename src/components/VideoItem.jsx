import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    console.log(video.snippet);
    return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="ui image"/>
        <div className="content">
            <div className="header">{video.snippet.title}</div>    
        </div>
    </div>);
};

export default VideoItem;