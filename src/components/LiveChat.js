import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'
import ChatMessage from './ChatMessage'


const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
 
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    useEffect(() => {
        const i = setInterval(() => {
            // Api polling
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(15),

            }))

        }, 2000);
        return () => clearInterval(i);
    }, [])

    return (
        <>
            <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse '>
                {
                    chatMessages?.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message} />)
                }
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();

                dispatch(addMessage({
                    name: "Samir Keshwani",
                    message: liveMessage
                }))
                setLiveMessage("");

            }} className='w-full p-2  m-2 border border-black flex '>
                <input className='w-95 px-2 ' type="text" value={liveMessage} onChange={(e) => {
                    setLiveMessage(e.target.value);

                }} />

                <button className='px-2 ml-2 bg-green-100'>Send</button>

            </form>
        </>


    );
};

export default LiveChat