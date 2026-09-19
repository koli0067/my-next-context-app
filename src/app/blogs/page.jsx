import React from 'react'
import BlogsCard from '../components/BlogsCard';

const blogData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
   if(!res.ok){
    throw new Error('Faild Blogs Page')
   }
   
    return res.json();
}

const page = async() => {

    const blogs = await blogData();
  return (
    <div>
        <h2>KOTHA KOLI</h2>
        <div className='grid grid-cols-3 gap-4'>
            {
                blogs.map(blog => <BlogsCard key={blog.id} blog = {blog}>

                </BlogsCard>)
            }
        </div>
    </div>
  )
}

export default page