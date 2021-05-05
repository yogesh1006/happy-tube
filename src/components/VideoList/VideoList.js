import React from 'react'
import './VideoList.css'
import VideoCard from '../videoCard/VideoCard'
import {videos} from '../../data'

function VideoList() {
    return (
        <div className="videolist">
            {videos.map(video =>(
             
              <VideoCard video={video} key={video.id}/>
            ))}
        </div>
    )
}

export default VideoList



