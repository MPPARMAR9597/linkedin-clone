import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("News Article Heading 1", "News Article Subheading 1")}
            {newsArticle("News Article Heading 2", "News Article Subheading 2")}
            {newsArticle("News Article Heading 3", "News Article Subheading 3")}
            {newsArticle("News Article Heading 4", "News Article Subheading 4")}
            {newsArticle("News Article Heading 5", "News Article Subheading 5")}
            {newsArticle("News Article Heading 6", "News Article Subheading 6")}
            {newsArticle("News Article Heading 7", "News Article Subheading 7")}

        </div>
    )
}

export default Widgets