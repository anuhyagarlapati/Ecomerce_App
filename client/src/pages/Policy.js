import React from 'react'
import Layout from '../components/layout/Layout'
import myAbout from '../assests/about.jpeg'
const Policy = () => {
  return (
    <Layout title={'Privacy policy'} >
        <div className='abt'>
            <img src={myAbout} alt="" height={600} width={700}/>
            <p>Policy</p>
        </div>
    </Layout>
  )
}

export default Policy
