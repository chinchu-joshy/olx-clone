import React,{useEffect,useContext,useState} from 'react';
import { firebaseContext } from '../../store/Firebasecontext';
import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../store/PostContext';
import { useHistory } from 'react-router-dom';
function Posts() {
  const [products,setPrododuct]=useState([])
const {firebase}=useContext(firebaseContext)
const {setPostDetails}=useContext(PostContext)
const history=useHistory()
useEffect(() => {
 firebase.firestore().collection('products').get().then((snapshot)=>{
   const allPost=snapshot.docs.map((product)=>{
     
      return{
        ...product.data(),
        id:product.id
      }
   })
   
   setPrododuct(allPost)
 
 })
},[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        { products.map(obj=>{
         return(
        <div className="cards">
        
          
          <div
            className="card" onClick={()=>{
              setPostDetails(obj)
              console.log(obj)
              history.push('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={obj.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {obj.price}</p>
              <span className="kilometer">{obj.category}</span>
              <p className="name"> {obj.name}</p>
            </div>
            <div className="date">
              <span>{obj.createdAt}</span>
            </div>
          </div>
            
               
        </div>
         )
        })
        }
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
