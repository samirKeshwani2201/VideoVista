import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { searchKeywordAdd } from "../utils/searchKeywordSlice"
import { Link, useNavigate } from "react-router-dom"
// import VideoListKeyword from './VideoListKeyword';
const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions()
            }
        }, 200);
        // setTimeout calls only once if we want to repetadely call then use setInterval
        // Here it calls the api after 200ms so if before 200 ms we type another letter then this api wont be called and will be destroyed and another new timer variable will be called due to return killing timer 
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery])

    const divRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            // Get the scroll position of the window
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Specify the threshold where you want to hide the <div> element
            const threshold = 0; // Adjust this value as needed
            // Get the <div> element
            const divElement = divRef.current;

            // Check if the scroll position exceeds the threshold
            if (divElement?.style) {
                if (scrollPosition > threshold) {
                    // Hide the <div> element
                    divElement.style.display = 'none';
                } else {
                    // Show the <div> element
                    divElement.style.display = 'block'; // Or set it to the appropriate display value
                }
            }
        };

        // Add scroll event listener to the window when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        // Adding suggestion to the cache 
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))
    }
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const handleSearchButton = () => {
        // <VideoListKeyword query={"india"} />

        // dispatch(searchKeywordAdd({
        //     searchKeyword:searchQuery
        // }))
        navigate(`/list?query=${searchQuery}`)
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow'>
            <div className='flex col-span-1 '>
                <img
                    className='h-8 cursor-pointer'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" alt="menu" onClick={() => toggleMenuHandler()} />
                <Link to="/">
                    <img
                        className='h-8 mx-2'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube-logo" />
                </Link>
            </div>

            <div className='col-span-10 static px-10'>
                <div>
                    <input
                        onFocus={() => setShowSuggestions(true)
                        }
                        onBlur={() => setTimeout(() => {
                            setShowSuggestions(false)
                        }, 300)}
                        onChange={
                            (e) => setSearchQuery(e.target.value)
                        }
                        value={searchQuery}
                        type="text" className='w-1/2  p-2 px-5 rounded-l-full border border-gray-400' />

                    <button type='submit' onClick={handleSearchButton} className='border border-gray-400 rounded-r-full px-5 bg-gray-100 py-2'>🔍</button>
                </div>
                {showSuggestions && <div ref={divRef} className='fixed border  border-gray-100 bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg'>
                    <ul>
                        {suggestions.map((item, index) => {
                            return <li key={index} className='py-1 hover:bg-gray-100 cursor-pointer' onClick={
                                () => {
                                    setSearchQuery(item)
                                }
                            }>{item}</li>
                        })}
                    </ul>
                </div>}
            </div>
            <div className='col-span-1' >
                <img
                    className='h-8'
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
            </div>
        </div>
    )
}
export default Head