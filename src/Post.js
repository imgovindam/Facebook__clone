import React from 'react'
import "./Post.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import PublicIcon from '@mui/icons-material/Public';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
function Post({photoURL, image, username, timestamp, message}) {
  return (
    <div className="post">
      <div className="post__top">
         <div className="post__topLeft">
         <Avatar src={photoURL}/>
         <div className="postInfo">
            <h4>{username}</h4>
            <p>{timestamp} <PublicIcon/></p>
         </div>

       

         </div>
         <MoreHorizIcon/>
      </div>
      <div className="post__middle">
            <p>{message}</p>
            {image && <img src={image}/>}
            {/* <img src="https://cdn.pixabay.com/photo/2015/04/01/12/13/elephant-702307__340.jpg"/> */}
            {/* <img src="https://www.exchange4media.com/news-photo/123068-107633-motupatlu.jpg"/> */}
         </div>
           <div className="post__bottom">  
           <div className="post__bottomOptions">
            <ThumbUpAltIcon/><p>Like</p>
            
           </div>
           <div className="post__bottomOptions">
            <ChatBubbleOutlineIcon/><p>Comment</p>
            
           </div>
           <div className="post__bottomOptions">
            <ShareIcon/><p>Share</p>
            
           </div>
            </div>
         
    </div>
  )
}

export default Post


