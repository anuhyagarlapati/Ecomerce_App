import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-dark text-light p-3'>
       <h4 className='text-center'>All Right Reserverd &copy; Anuhya</h4>
       <p className='text-center mt-3'>
        <Link to='/about' className='a'>About</Link>|
        <Link to='/contact ' className='a'>Contact</Link>|
        <Link to='/policy' className='a'>Privacy policy</Link>
       </p>
    </div>
  )
}

export default Footer
