import React from 'react';
import './HeaderOption.css';
import Avatar from '@mui/material/Avatar';

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='HeaderOption__icon' />}
            {avatar && (
                <Avatar className='HeaderOption__icon' src={avatar} alt={avatar} />
            )}
            <h3 className='HeaderOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption