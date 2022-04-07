import React from 'react';
import './HeaderOption.css';
import Avatar from '@mui/material/Avatar';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({ avatar, Icon, title, onCLick }) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onCLick} className='headerOption'>
            {Icon && <Icon className='HeaderOption__icon' />}
            {avatar && (
                <Avatar className='HeaderOption__icon'>{user?.email[0]}</Avatar>
            )}
            <h3 className='HeaderOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption