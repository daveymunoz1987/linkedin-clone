import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";
import Niagara from "./images/niagara.jpg";

function Sidebar() {

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
        <h2>David Munoz</h2>
        <h4>daveymunoz1987@gmail.com</h4>
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
