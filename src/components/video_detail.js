import React from 'react';

const VideoDetail = ({item2}) => {

    if(!item2) {
        return <div>Loading..</div>
    }

    const videoId =item2.id.videoId;
    // const url= "https://www.youtube.com/embed/"+videoId; below line is same as this.  
    const url= `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <div>{item2.snippet.title}</div>
                <div>{item2.snippet.description}</div>
            </div>
        </div>
    );
}
export default VideoDetail;
