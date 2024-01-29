import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikedComponent = () => {

    const [isliked, setIsLiked] = useState(false)

    const handleLiked = () => {
        setIsLiked(!isliked)
    }

    return (
        <div>
            {isliked ? <AiFillHeart color='red' onClick={handleLiked}/> : <AiOutlineHeart color='red' onClick={handleLiked}/>}
        </div>
    )
}

export default LikedComponent
