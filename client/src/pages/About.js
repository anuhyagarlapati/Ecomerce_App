import React from 'react'
import Layout from '../components/layout/Layout'
import myAbout from '../assests/about.jpeg'
const About = () => {
  return (
    <Layout title={'About us -Ecomerce app'}>
        <div className='abt'>
            <img src={myAbout} alt="" height={600} width={700}/>
            <p>A well-styled outfit speaks volumes, especially for men.
                            Branded formal shirts are not merely wardrobe components
                            they are highly powerful tools that transform the overall
                            A well-styled outfit speaks volumes, especially for men.
                            Branded formal shirts are not merely wardrobe components
                            they are highly powerful tools that transform the overall
                            A well-styled outfit speaks volumes, especially for men.
                            Branded formal shirts are not merely wardrobe components
                            they are highly powerful tools that transform the overall
                            A well-styled outfit speaks volumes, especially for men.
                            Branded formal shirts are not merely wardrobe components
                            they are highly powerful tools that transform the overall</p>
        </div>
    </Layout>
  )
};
Layout.defaultProps={
  title:'Ecommerce app -shop now',
  description:'mern stack prohect',
  keywords:'mern,react,mode,mongodb',
  author:'Anuhya',
}

export default About
