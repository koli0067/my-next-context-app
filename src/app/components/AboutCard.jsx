import Link from 'next/link'
import React from 'react'

function AboutCard({post}) {
  return (
    <div className="card bg-blue-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{post.name}</h2>
    <p>{post.email}</p>
    <p>{post.body}</p>
    <div className="card-actions justify-end">
      <Link href={`/about/${post.id}`}>
        <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default AboutCard