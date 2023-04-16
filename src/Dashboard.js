import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';

function Dashboard() {
  return (
    <div>
        <div className="app__body">
     
     <Sidebar/>
     <Feed/>

     <RightSidebar/>

     
     </div>
    </div>
  )
}

export default Dashboard
