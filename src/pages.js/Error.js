import React from 'react'
import {Link} from "react-router-dom"

export default function Error() {
  return (
    <>
        <section className='flex flex-col items-center justify-center h-[80vh] text-center font-semibold'>
            <h1 className='py-10'>Error | The requested resource was not found</h1>
            <Link to="/" className="p-4 bg-[#000000] text-white rounded-lg">Back to Homepage</Link>
        </section>
    </>
  )
}
