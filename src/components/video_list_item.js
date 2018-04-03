import React from 'react';

const VideoListItem = ({item, onVideoSelect}) =>{
    const imgUrl= item.snippet.thumbnails.default.url;
    // const video =props.video;
    return (
        <li onClick={()=> onVideoSelect(item)} className="list-group-item">
            <div className="video-list media">
                <div className= "media-left">
                    <img className="media-object" src={imgUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{item.snippet.title}</div>
                </div>
            </div>
        </li>
        );
};

export default VideoListItem;