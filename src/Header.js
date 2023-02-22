import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedIn from './images/linkedin.png';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import { logout } from './features/userSlice';

function Header() {

  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>

      <div className="header_left">
        <img src={LinkedIn} alt="LinkedIn" />

        <div className="header_search">
            <SearchIcon />
            <input type="text" placeholder='Search'/>
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={<Avatar />} title="Me" onClick={logOutOfApp}/>
        
      </div>     
    </div>
  )
}

export default Header
