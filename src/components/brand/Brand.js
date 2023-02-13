import React from 'react'
import "./brand.css";
import { google,atlassian,shopify,slack,dropbox } from './import';
const Brand = () => {
  return (
    <div>

    <div className='gpt3__brand'>
     <div>
     <img src={google} alt=
        "Google"
      />
     </div>
     <div>
     <img src={atlassian} alt=
        "atlassian"
      />
     </div>
     <div>
     <img src={shopify} alt=
        "shopify"
      />
     </div>
     <div>
     <img src={slack} alt=
        "slack"
      />
     </div>
     <div>
     <img src={dropbox} alt=
        "dropbox"
      />
     </div>
    </div>
    </div>
  )
}

export default Brand