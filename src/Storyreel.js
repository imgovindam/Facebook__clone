import React from 'react'
import "./Story.css"
import { Avatar } from '@mui/material'
function Storyreel() {
  return (
    <div className='storyReel'>
      <div className="story" style= {{backgroundImage:`url('https://pbs.twimg.com/profile_images/1622938303199875073/lJLKpKUZ_400x400.jpg')`}}> 
        <Avatar src='https://scontent.fdel11-1.fna.fbcdn.net/v/t1.18169-9/23435135_1553721834717483_2529385433083751184_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=4iauzNm__I8AX8Qn_WM&_nc_ht=scontent.fdel11-1.fna&oh=00_AfA7VUGwgtkFuAwMtSUdoEmWxZCG-18i2M6IlR20bZVX1A&oe=645F02EB'/>
        <h4>Govind Raj</h4>
      </div>
      <div className="story" style= {{backgroundImage:`url('https://e1.pxfuel.com/desktop-wallpaper/465/181/desktop-wallpaper-shinchan-most-popular-sinchan-mobile.jpg')`}}> 
        <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/465/181/desktop-wallpaper-shinchan-most-popular-sinchan-mobile.jpg"/>
        <h4>sinchan</h4>
      </div>

      <div className="story" style= {{backgroundImage:`url('https://www.adgully.com/img/800/202010/chhota-bheem.png.jpg')`}}> 
        <Avatar src="https://www.adgully.com/img/800/202010/chhota-bheem.png.jpg"/>
        <h4>Chota Bheem</h4>
      </div>
        <div className="story" style= {{backgroundImage:`url('https://www.gannett-cdn.com/presto/2018/11/28/USAT/b48bf405-f8c0-44a4-bbc2-3b87c7565aa9-Mira_-_Disney.jpg')`}}> 
        <Avatar src="https://www.gannett-cdn.com/presto/2018/11/28/USAT/b48bf405-f8c0-44a4-bbc2-3b87c7565aa9-Mira_-_Disney.jpg"/>
        <h4>Chingu</h4>
      </div>
      <div className="story" style= {{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3dA8vhdtisu8E5IG1Xa5erRLoLZD0MktAyq3-vn96_6IX7QodLTcb922lFAX5JlQGUI&usqp=CAU')`}}> 
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3dA8vhdtisu8E5IG1Xa5erRLoLZD0MktAyq3-vn96_6IX7QodLTcb922lFAX5JlQGUI&usqp=CAU"/>
        <h4>Helicopter</h4>
      </div>
    </div>
  )
}

export default Storyreel
