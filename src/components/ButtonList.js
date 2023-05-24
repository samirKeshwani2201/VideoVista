import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "News", "Valentines"]

const ButtonList = () => {
    return (

        <div className='flex'>
            {
                list.map(item =>
                    <Button key={item} name={item} />
                )
            }

        </div>
    )
}

export default ButtonList