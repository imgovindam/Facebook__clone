import React from "react";
import'./HeaderArea.css'

import { FaBeer } from 'react-icons/fa';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Avatar, IconButton } from "@mui/material";

import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


   

function HeaderArea(){
    return(

        <div className="header">


            

            <div className="header__left">
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"/>

        <div className="header__search">
             <SearchIcon/>
             <input type="text" placeholder="Search Facebook"/>
            </div>  
            </div>

                <div  className="header__middle">
                    <div className="header__option">
                 <HomeIcon fontSize="large"/>
                 </div>

                 <div className="header__option">
                 <OndemandVideoIcon fontSize="large"/>
                </div>

                <div  className="header__option">
                 <GroupIcon fontSize="large"/>
                </div>

                <div  className="header__option">
                 <SportsEsportsIcon fontSize="large"/>
                </div>
                </div>
                
                
               
                


                    <div className="header__right">
                        <div className="header__info">
                            <Avatar src="https://scontent.fdel11-3.fna.fbcdn.net/v/t31.18172-8/20746097_1472528476170153_1742798982007968897_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=zqcObXVOHW8AX9r9hhB&_nc_ht=scontent.fdel11-3.fna&oh=00_AfCPxDqgH4K8KSL4xPu23QXn4g4G_-T_wNYs-Pv1o3ZWTQ&oe=645C6C4B"/>
                            <h5>Govind Raj</h5>
                            <div/>
                            
                        
                        
                        

                       < AppsIcon/>
                        
                       <ForumIcon/>
                       < NotificationsActiveIcon/>
                        
                        <ArrowDropDownOutlinedIcon />
                        
                        
                        
                        </div>
                    
                        </div>
                       </div> 
                       
                        
                    
                
            
        
    )
}
export default HeaderArea 