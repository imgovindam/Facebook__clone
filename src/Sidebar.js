import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import PeopleIcon from '@mui/icons-material/People';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className="sidebar">
      
      <Sidebaroptions src="https://scontent.fdel11-3.fna.fbcdn.net/v/t31.18172-8/20746097_1472528476170153_1742798982007968897_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=zqcObXVOHW8AX_2TS9Z&_nc_ht=scontent.fdel11-3.fna&oh=00_AfAfP9ml_n4h-Pxm4AssXV2zUP7nTJlupPOQLKHSeZuD4A&oe=645CA48B" title="Govind Raj"/>
      <Sidebaroptions Icon={PeopleIcon} title="Friends"/>
      <Sidebaroptions Icon={SmartDisplayRoundedIcon} title="Watch" />
      <Sidebaroptions Icon={Groups2RoundedIcon  } title="Groups"/>
      <Sidebaroptions Icon={StoreRoundedIcon} title="Marketplace"/>
      <Sidebaroptions  Icon={ExpandCircleDownIcon}  title="See more"/>
      <Sidebaroptions/>
    </div>
  )
}

export default Sidebar
