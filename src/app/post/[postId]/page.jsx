import React from 'react'

const page = async ({params}) => {
    const {postId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await res.json();
  return (
    
    <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
   
    </div>
  )
}

export default page