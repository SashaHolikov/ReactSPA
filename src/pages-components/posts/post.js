import React from "react";
import './post.css'
import postInfo from "../info";
import MyPost from "./MyPost";


function Post() {
   const posts = postInfo;
    return (
        <>
        <MyPost {...posts[0]} />
        <MyPost {...posts[1]} />
         </>
        
            )
}

export default Post