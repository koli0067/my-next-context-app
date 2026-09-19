import React from 'react'
import PostCard from '../components/PostCard';

const PostData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     return res.json();
   
}

const page = async () => {
    const posts = await PostData();
  return (
    <div>
         <h2 className='text-4xl text-blue-400 font-bold my-6 text-center'>post page</h2>
         <div className='grid grid-cols-3 gap-4 px-7'>
            {
            posts.map(post => <PostCard key={post.id}
            post={post}></PostCard>)
         }
         </div>
    </div>
  )
}

export default page