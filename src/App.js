import React, { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Posts from "./Pages/Posts"
import Home from "./Pages/Home"
import Create from "./Pages/Create"
import Single from "./Pages/Logout"
import Navbar from './Components/Navbar';




const App = () => {
 const [posts, setPosts] = useState([]);
 const [user, setUser] = useState(null)


const COHORT_NAME = '2209-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const changeUserState = (data) =>{
  setUser(data)
}
 useEffect(() => {
  const fetchPosts = async () => {
    const resp = await fetch(`${BASE_URL}/posts`);
    const data = await resp.json();

    console.log(data)

    setPosts(data.data.posts);
  }
 fetchPosts()
}, []);

console.log(user)



return(
  <BrowserRouter>
  <Navbar user={user} />
  <Routes>
    <Route path='/' element = {<Home posts = {posts}/>}/> 
    {!user && <Route path='/login' element = {<Login changeUserState={changeUserState} />} />}
    {!user && <Route path='/register' element = {<Register changeUserState={changeUserState} />} />}
    <Route path='/create' element = {<Create />}/> 
  </Routes>
  {/* <Navbar /> */}

 

    
</BrowserRouter>
)
}
export default App