import React,{useState,useEffect} from 'react'
import Layout from '../components/layout/Layout'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
const ProductDetails = () => {
    const params=useParams()
    const navigate=useNavigate()
    const [product,setProduct]=useState({})
    const [relatedProducts,setRelatedProducts]=useState([])
    // Fetch product details
    useEffect(() => {
        if (params?.slug) getProduct()
    }, [params?.slug]);
    //getProduct
    const getProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
            setProduct(data?.products);
            getSimilarProduct(data?.products._id, data?.products.category._id);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
    // Get similar products
const getSimilarProduct = async (pid, cid) => {
  try {
    const { data } = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`);
    setRelatedProducts(data?.products);
  } catch (error) {
    console.error('Error fetching related products:', error);
  }
};

  return (
    <Layout>
        <div className='row container mt-2'>
            <div className='col-md-6'>
                <img src={`/api/v1/product/product-photo/${product._id}`} className="card-img-top" 
                alt={product.name} 
                height={400}
                width={300}/>    
            </div>
            <div className='col-md-5'>
                <h1 className='text-center'>Product Details</h1>
                <h6>Name : {product?.name}</h6>
                <h6>Description : {product?.description}</h6>
                <h6>Price : {product?.price}</h6>
                <h6>Category:{product?.category?.name}</h6>
                <button className='btn btn-secondary ms-1'>ADD TO CART</button>
            </div>
        </div>
        <hr/>
        <div className='row container'>
            <h6>Similar Products</h6>
            {relatedProducts.length<1 && (<p className='text-center'>No Similar Products found</p>)}
            <div className='d-flex flex-wrap'>
            {relatedProducts?.map(p => (
                <div className="card m-2" style={{width: '18rem'}} key={p._id}>
                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" 
                alt={p.name} 
                style={{ height: '100%'}}/>
                <div className="card-body text-center" >
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,100)}</p>
                    <p className="card-text">$ {p.price}</p>
                    <button
                        className='btn btn-primary ms-1'
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                    <button className='btn btn-secondary ms-1'>ADD TO CART</button>
                </div>
                </div>
            ))}

          </div>
        </div>
    </Layout>
  )
}

export default ProductDetails
