import Link from 'next/link';
import React from 'react'

const PostCard = ({post}) => {
    const {id, title, category, inStock, description} = post;
  return (
    <div className="card bg-blue-100 shadow-sm">
    <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{inStock}</p>
        <p>{category}</p>
        <div className="card-actions justify-end">
        <Link href={`/post/${id}`}>
           <button className="btn btn-primary">Buy Now</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default PostCard