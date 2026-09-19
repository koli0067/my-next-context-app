import React from 'react'

const page = async({params}) => {

    const {aboutId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${aboutId}`)
    const posts = await res.json();
  return (
    <div>
        <h2>{posts.name}</h2>
        <p>{posts.email}</p>
        <p>{posts.body}</p>
    </div>
  )
}

export default page