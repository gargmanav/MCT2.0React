import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./products.css"
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from '../../Redux/features/Newuser';


const Products = ({detailingHandler}) => {
  const [state, setstate] = useState(true);
  const [caty, setcaty] = useState("electronics");
  const [data, setdata] = useState([]);


  const {posts,loading} = useSelector((state)=> state.post);
  const dispatch = useDispatch();

useEffect(() => {
dispatch(getPosts());
}, [])




  useEffect(()=>{
  catyHandler(caty);
  },[caty])

  async function catyHandler(ele){
    const res= await fetch(`https://fakestoreapi.com/products/category/${ele}`)
    const data=await res.json();
    setdata(data);
    setstate(!state)
  }

  return (
    <div>
      <Navbar/>
      
       <div className="mainproductcontainer">
        <div className="rightbox">
        {posts.map((ele)=>{
          return <div className="caty" onClick={()=>setcaty(`${ele}`)}>{ele}</div>
        })}

        </div>
        <div className="left1 bor">
          <div className="cardLink">
            {data.map((e,i)=>{

              return(
            <li key={i} onClick={()=>detailingHandler(e)}><Link to={"/Details"}>{e.title}</Link></li>)
            })}
            
          </div>
        </div>
       </div>
    </div>
  )
}

export default Products
