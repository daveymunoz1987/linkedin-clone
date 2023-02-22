import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = ( heading, subtitle ) => (
    <div className='widgets_article'>
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon/>
      </div>
        

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("David is back!", "1,000,000 Readers")}
      {newsArticle("Coronavirus UK Update", "Top News - 23,422 Readers")}
      {newsArticle("Tesla Hits New Highs", "Cars & Auto - 880 Readers")}
      {newsArticle("Is Redux Too Good?", "Code - 123 Readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 Readers")}
    </div>
    
  )
}

export default Widgets
