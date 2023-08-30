import React from "react";
import './post.css';
import MyPost from "./MyPost";


const postInfo = [{
    id: 0,
    name: "KenB",
    avatar: 'KenAvatar',
    nickname: "@KenBarby",
    date: " 02/08/2023",
    text: "It's definitly yours?? It's yellow",
    content: "kenPost",
    comments: 7,
    repost: 5,
    like: 15
},
{
    id: 1,
    name: "Barby",
    avatar: 'KenAvatar',
    nickname: "@Barby",
    date: " 04/10/2023",
    text: "Sorry, I didn't notice that the laces are pink...",
    content: "kenPost",
    comments: 8,
    repost: 7,
    like: 20
}
];

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