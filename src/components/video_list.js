// this doesn't requires any state to record the changes.

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList =(props)=> {
    const VideoItems= props.ssup.map((item)=> {
        return (
        <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={item.etag}
            item={item} />);
    });
    return (
        <div>
            <ul className="col-md-4 list-group">
                No. of videos : {props.ssup.length}
                {VideoItems}
            </ul>
        </div>
    );
};

export default VideoList;