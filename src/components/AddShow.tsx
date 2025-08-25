import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

 const AddShow = async () => {

  const snippets=await prisma.snippet.findMany();



  return (
<div className='flex flex-col '>
        <div className='p-4 border-b flex justify-between items-center'>
        <h1 className=' text-blue-700 text-2xl px-4 py-2  mt-4' >Snippets</h1>
        {/* <button>New</button> */}
        <Link href={"/snippet/new"} className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>New</Link>
        
    </div>
{
  snippets.map((snippet)=>(
    <div key={snippet.id} className='border-b p-4'>
      <h2 className='text-lg font-semibold'>{snippet.title}</h2>
      <pre className='bg-gray-100 p-2 rounded mt-2 overflow-x-auto'>{snippet.code}</pre>
    </div>
  ))
}
</div>
  )
}

export default AddShow