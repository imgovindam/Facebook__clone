import React from 'react'
import "./Right.css" 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CampaignIcon from '@mui/icons-material/Campaign';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
function RightSidebar() {
  return (
    <div className="widget">
      
      <div className="widget__header">
        <div className="widget__headerLeft">
       <h4>Your Page</h4>
        </div>
        <MoreHorizIcon/>
      </div>

      <div className="widget__body">
        <div className="widget__bodyOption">
          <Avatar src="https://i.pinimg.com/550x/f0/04/bb/f004bbb91caea47f1f4681f01000427d.jpg"/>
          <h4>Govindam</h4>
        </div>
        <div className="widget__bodyOption">
          <NotificationsNoneIcon/>
          <p>1Notification</p>
        </div>
        <div className="widget__bodyOption">
          <CampaignIcon />
          <p>Create Promotion</p>
        </div>
        
        
      </div>
        <hr/><br/>

      <div className="widget__header">
        <div className="widget__headerLeft">
       <h4>Birthdays</h4>
       <p>imgovindam's birthday is today</p>
       <hr/><br/>
        </div>
        <CardGiftcardIcon style={{color:"pinkies"}}/>
        
       </div> 
      
        <div className="widget__headerRight">
       <h4>Contact</h4>
        </div>
        <MoreHorizIcon/>
      
      
        <div className="widget__headerRight">
       <h4>Your Page</h4>
        </div>
        <MoreHorizIcon/>
      

    </div>
  )
}

export default RightSidebar
