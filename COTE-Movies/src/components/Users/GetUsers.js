import * as Axios from 'axios';
import { useState } from 'react';
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
  background-color: #1b36ef;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Update = styled.button`
  background-color: #33ca5f;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function GetUsers() {

// Define setData
// setData is review.id, post and rating. Store in memory using
// local storage for use later in Update.

  const setData = (userId, name, email) => {
    localStorage.setItem('UserID', userId)
    localStorage.setItem('Name', name)
    localStorage.setItem('Email', email)
    //localStorage.setItem('RegDate', dateRegistered)
  }

 // Define a state used to store the Review once called
  const [user, setUser] = useState([]);

  // Call API methods with axios

  async function GetUsers() {
    await Axios.get("http://localhost:5000/api/Users").then(
      (response) => setUser(response.data));
  }

  return (
    <div>
    <Button onClick={GetUsers}> Show User List </Button>
    <Button> Hide Users </Button>
   
    {user.map(user => (
      <ul key={user.userId}>
        <br/>
        <li className='List'><b>User ID:</b> {user.userId}</li>
        <li className='List'><b>Name:</b> {user.name}</li>
        <li className='List'><b>Email:</b> {user.email}</li>
        <li className='List'><b>Date registered:</b> {user.dateRegistered}</li>
        <br/>
        <Update onClick={() => setData(user.userId, user.name, user.email)}><Link to="/update-user">Update</Link></Update>
        <Delete onClick={() => setData(user.userId)}><Link to="/delete-user">Remove</Link></Delete>
        </ul>
    ))}
    </div>
  )
}

export default GetUsers;