import React, { useEffect, useState } from 'react';
import "./Create.css";

const COHORT_NAME = '2209-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location: 'US',
        }
      })
    });
    const data = await response.json();
    alert("Post created successfully");
    window.location.href = '/';
    // console.log('data', data);
  };

  return (
    <div className='create'>
      <h3>
        Create a Post
      </h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title} onChange=
          {(ev) => setTitle(ev.target.value)} />
        <input type="text" placeholder="description" value={description} onChange=
          {(ev) => setDescription(ev.target.value)} />
        <input type="text" placeholder="price" value={price} onChange=
          {(ev) => setPrice(ev.target.value)} />
        <button type="submit"
          className="btn btn-online-primary">submit</button>
      </form>
    </div>
  )
}




export default Create