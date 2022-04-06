import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>

            <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxLeHBsb3JILWZLZWRBMXx8fGVufDB8fHw3D&w=1000&q=80' alt='User Profile Images' />
                <Avatar className='sidebar__avatar' />
                <h2>Maulik Parmar</h2>
                <h4>Mkparmar41@gmail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who Viewed You</p>
                    <p className='sidebar__statNumber'>1,500</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,500</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem("ReactJS")}
                {recentItem("JS")}
                {recentItem("Development")}
                {recentItem("Design")}
            </div>

        </div>
    )
}

export default Sidebar