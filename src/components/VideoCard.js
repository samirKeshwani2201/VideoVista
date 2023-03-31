import React from 'react'

const VideoCard = ({ info }) => {

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 w-72 shadow'>
            <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
            <ul>
                <li className='py-2 font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>

            </ul>
        </div>
    )
}
export const AdVideoCard = ({ info }) => {
    return (
        <div className='p-1 m-1 border border-red-950'>
            <VideoCard info={info}/>
        </div>
    )
}
export default VideoCard    