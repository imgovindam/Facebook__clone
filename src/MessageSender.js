import { Avatar,IconButton,Modal } from '@mui/material'
import React, { useState } from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
// import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import PersonIcon from '@mui/icons-material/Person';
import MoodIcon from '@mui/icons-material/Mood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./MessageSender.css"
import { MoreHorizOutlined } from '@mui/icons-material';

function MessageSender() {
  const[open,setOpen]=useState(true);
  const handleClose=()=>{
    setOpen(false)
  }
  const handleOpen = ()=> {
    setOpen(true)
  }

  return (
      <>
      <Modal open= {open} onClose={handleClose}>
         
         <div className="modal__pop">
          
          <form>
        <div className="modalHeading">
          <h3>create post</h3>
          
          
            <CloseIcon onClick={handleClose}/>
          
         </div>
         <div className="modelHeader">
          <Avatar src="https://scontent.fdel11-3.fna.fbcdn.net/v/t31.18172-8/17436336_1307019372721065_4586270760387435140_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=zVsvts3RoLgAX_2C9RF&_nc_ht=scontent.fdel11-3.fna&oh=00_AfCAdyAV_bf3A45BXjYE1exK8eZGtWRPiYabtv30fzE1bA&oe=6460AB34"/>
          <h5>Govind Raj</h5>

         </div>
         <div className="modalBody">
          <textarea rows ="5" placeholder="What's on your mind Govind?"></textarea>
         </div>
          </form>
          <div className="modalFooter">
            <div className="modalFooterLeft">
             <h4>Add to your post</h4>
            </div>
            <div className="modalFooterRight">
                  <PhotoAlbumIcon fontSize="large" style={{color:"#00a400"}}/>
                  <PersonIcon fontSize="large" style={{color:"#1877f2"}}/>
                  <MoodIcon fontSize="large" style={{color:"#ffb100"}}/>
                  <LocationOnIcon fontSize="large" style={{color:"#fa383e"}}/>
                  <MoreHorizOutlined fontSize="large" style={{color:"#828282"}}/>
            </div>
          </div>
          <input type="submit" className="post__submit" value="post"/>
         </div>
          
      </Modal>
 
    <div className="messagesender">

      <div className="messagesender__top">
        <Avatar src='https://scontent.fdel11-3.fna.fbcdn.net/v/t31.18172-8/17436336_1307019372721065_4586270760387435140_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=jXStL2olrgIAX_b4KlK&_nc_ht=scontent.fdel11-3.fna&oh=00_AfDG9UkLojdHG028L-Eft6vdzwiz5Xu7bU6-oCw6vWWPjQ&oe=645F2174'/>
        <form>
            <input type="text" placeholder="What's on your mind,Govind?" onClick={handleOpen}/>
        </form>

      </div>
      <div className="messagesender__bottom">
        <div className="messangerOption">
            <VideoCallIcon style={{color:'#f35369'}} fontSize='large'/>
            <p>Live Video</p>
        </div>
        <div className="messangerOption">
            <PhotoAlbumIcon style={{color:'#00a400'}} fontSize='large'/>
            <p>Photo/Video</p>
        </div>
        <div className="messangerOption">
            <EmojiEmotionsIcon style={{color:'#ffb100'}} fontSize='large'/>
            <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default MessageSender
