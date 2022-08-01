import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>404 PAGE</h1>
        <p>That page cannot be found</p>
        <Link to='/'>Back to homepage....</Link>
    </div>
  )
}

export default NotFound