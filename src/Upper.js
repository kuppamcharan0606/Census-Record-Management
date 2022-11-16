import './upper.css';
import React from 'react';
function Upper(){
   return(
    <ul className='header'>
        <li className='header-census'><a>CENSUS INDIA</a></li>
        <li className='header-home' style={{float:"right",textAlign:"center"}}><a>Home</a></li>
    </ul>
   );
 }
export default Upper;