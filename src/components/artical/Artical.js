import React from 'react'
import "./artical.css"
const Artical = ({imgUrl,date,title}) => {
  return (
    <div className='gpt3__blog__container_artical'>


<div className='gpt3__blog__container_artical_image'>
  <img src={imgUrl} alt="BlogImage"  />
</div>
<div className='gpt3__blog__container__artical__content'>
  <p >{date}</p>
  <h3>{title}</h3>
  <p>Read Full Artical</p>
</div>
    </div>
  )
}

export default Artical