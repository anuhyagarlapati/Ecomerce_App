import React,{useState}from 'react'
import '../../authStyles/Pagestyles.css'
import Layout from './../../components/layout/Layout.js';
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
      const [newpassword, setNewPassword] = useState("");
      const [answer, setAnswer] = useState("");
      const navigate = useNavigate();
      const location=useLocation();
      // form function
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("/api/v1/auth/forgot-password", {
            email,
            newpassword,
            answer,
          });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);

            navigate(location.state || '/login');
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };
  return (
    <Layout title={"Forgot Password -ecommerce app"}>
        <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Favourite Sport Name "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your New Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword
