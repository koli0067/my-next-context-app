// import React, { Suspense } from 'react'
import AboutCard from '../components/AboutCard';

const PostData2 = async() => {
     try{
      const res = await fetch('https://jsonplaceholder.typicode.com/comments');
       return res.json();
     }
     catch(error){
         throw new Error('Faild Post Error')
     }
}
const page = async() => {

  const Posts = await PostData2();

  return (
    <div>

      <h2 className='text-4xl my-6 font-bold text-center'>About us page</h2>

       <div className='grid grid-cols-3 gap-4'>
         {
          Posts.map(post => <AboutCard key={post.id} post={post}>

          </AboutCard >)
        }
       </div>
    </div>
  )
}

export default page