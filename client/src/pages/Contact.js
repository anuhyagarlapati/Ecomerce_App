import React from 'react'
import Layout from '../components/layout/Layout'
import myContact from '../assests/contact.jpeg'
import {MdOutlineMailOutline,MdOutlinePhone,MdHeadsetMic} from 'react-icons/md'
const Contact = () => {
  return (
    <Layout title={'Contact us'}>
        <div className='cnt'>
          <img src={myContact} alt="Contact" height={600} width={700} />
          <div className='contact'>
            <h1>CONTACT US</h1>
            <p>Any query and info about product feel free to call anytime.<br />
              We are 24x7 available.</p>
            <p><MdOutlineMailOutline /> www.help@ecommerceapp.com</p>
            <p><MdOutlinePhone /> 012-34567-9</p>
            <p><MdHeadsetMic /> 18000-000-000 (toll free)</p>
          </div>
        </div>
    </Layout>
  )
}

export default Contact
