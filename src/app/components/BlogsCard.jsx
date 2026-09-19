"use client"

import React, { useState } from 'react'

const BlogsCard = ({blog}) => {

    const [count, setCount] = useState(0)

    const incressHandel = () => {
        setCount(count + 1);
    }
    const removeHandel = () => {
        setCount(count - 1);
    }

  return (
    <div className="card bg-base-100 shadow-sm">
  <figure>
   {/* <Image></Image> */}
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {blog.title}
      <div className="badge badge-secondary py-4">Counter: {count}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div onClick={incressHandel}
       className="badge badge-outline cursor-pointer">Increses</div>
      <div onClick={removeHandel}
      className="badge badge-outline cursor-pointer">Decrices</div>
    </div>
  </div>
</div>
  )
}

export default BlogsCard