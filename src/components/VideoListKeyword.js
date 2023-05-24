import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_KEYWORD_API_2, YOUTUBE_SEARCH_KEYWORD_API_1 } from '../utils/constants';
import { Link, useLocation, } from 'react-router-dom'
import VideoCard from './VideoCard';

const VideoListKeyword = () => {
    const [videos, setVideos] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const query = searchParams.get('query');

    useEffect(() => {
        getVideos();
    }, [query])

    const getVideos = async () => {
        if (query) {
            const data = await fetch(YOUTUBE_SEARCH_KEYWORD_API_1 + query + YOUTUBE_SEARCH_KEYWORD_API_2);
            console.log({ query })
            const json = await data.json();
            setVideos(json.items)
        }
    }
    return (
        <div className='flex flex-wrap' >
            {/* {console.log(query)} */}
            {/* { videos[0] &&  <AdVideoCard info={videos[0]} />} */}
            {
                videos?.map(
                    (video, index) => {
                        return <Link to={`/watch?v=${video?.id?.videoId || video?.id}`} key={index}>
                            {video && <VideoCard info={video} />}
                        </Link>
                    }
                    
                )
            }


        </div>
    )
}

export default VideoListKeyword   