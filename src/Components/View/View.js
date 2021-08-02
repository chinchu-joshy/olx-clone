import React,{useState,useEffect,useContext} from 'react';
import { firebaseContext } from '../../store/Firebasecontext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [useDetails,setUseDetails]=useState()
  const {firebase}=useContext(firebaseContext)
  const {postDetails}=useContext(PostContext)
  useEffect(() => {
    const {userId}=postDetails
   
    firebase.firestore().collection('users').where('id','==',userId).get().then((response)=>{
      response.forEach(doc=>{
        setUseDetails(doc.data())
      })
    })
    
  }, [])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {useDetails &&
        <div className="contactDetails">
          <p>Seller Details</p>
          <p>{useDetails.username}</p>
          <p>{useDetails.phone}</p>
        </div>
}
      </div>

    </div>
  );
}
export default View;
