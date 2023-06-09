import React, { useEffect, useState } from 'react';

const COHORT_NAME = '2209-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const Home = ({ posts }) => {

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('auth_token');
            const response = await fetch(`${BASE_URL}/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.json();
            alert("Post deleted successfully");
            window.location.reload();
        } catch (err) {
            alert('Unable to delete post');
        }
    }

    return (
        <>
            <h1>Welcome Stranger!</h1>
            {/*  {posts.map((posts) => (
          <div key={post.id}>
          <h3>{post.title}</h3>
          <div>{post.body}</div>
          </div>
        )))*/}

            <h3>Friends don't lie... JK</h3>

            <h1>
                Remember, "The first draft is just you telling yourself the story." - Terry Pratchett
            </h1>
            {/* <Create posts={posts} setPosts={setPosts}/> */}
            {
                posts.map(post => <div key={post._id}>
                    <h3>{post.title}</h3>
                    <div>{post.description}</div>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                </div>)
            }


        </>

    )
}

export default Home