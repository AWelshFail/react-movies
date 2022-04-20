import * as Axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-dom";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Delete = styled.button`
  background-color:#7d090d;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Update = styled.button`
  background-color: #d67b0b;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function GetReview() {

  const [vid, setVID] = useState('');

// Define setData
// setData is review.id, post and rating. Store in memory using
// local storage for use later in Update.



  const setData = (id, rating, post, date, videoId, userId) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('Rating', rating)
    localStorage.setItem('Post', post)
    localStorage.setItem('Date', date)
    localStorage.setItem('VideoID', videoId)
    localStorage.setItem('UserID', userId)
  } 

 // Define a state used to store the Review once called
  const [review, setReview] = useState([]);
  //const [videoReview, setVideoReview] = useState('');

  /*useEffect(() => {
    setVideoReview(localStorage.getItem('VideoID'));
    console.log(setVideoReview + "This is it")
}, [])*/

  // Call API methods with axios

  async function getReviews() {
    await Axios.get("http://localhost:5000/api/Reviews").then(
      (response) => setReview(response.data));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setVID(localStorage.getItem('VideoID'));
}, )

const VidReview = review.filter(review => review.videoId === vid)

  return (
    <div>
    <Button onClick={getReviews}> Show Reviews </Button>
    <Button> Hide Reviews </Button>
   
    {/*let GetReview = reviews.filter(function (review) {
        return review.videoId === {videoId};
    }).map(function (review) {
        return review.post;
    })*/}

    {VidReview.map(review => (
      <ul key={review}>
        <br/>
        <li className='List'><b>Rating:</b> {review.rating}</li>
        <li className='List'><b>Post:</b> {review.post}</li>
        <li className='List'><b>Date:</b> {review.date}</li>
        <li className='List'><b>User ID:</b> {review.userId}</li>
        <br/>
        <Update onClick={() => setData(review.id, review.rating, review.post, review.date, review.videoId, review.userId)}><Link to="/update">Update</Link></Update>
        <Delete onClick={() => setData(review.id)}><Link to="/delete">Remove</Link></Delete>
        </ul>
    ))}
    </div>
  )
}

export default GetReview;