import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";
import Niagara from "./images/niagara.jpg";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
      <div className="sidebar_recentItem">
          <span className="sidebar_hash">#</span>
          <p>{topic}</p>
      </div>   
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={Niagara} alt="Niagara" />
        <Avatar className="sidebar_avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_statNumber">3,000</p>
        </div>
        <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statNumber">2,000</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
      </div>
    </div>
  );
}

export default Sidebar
