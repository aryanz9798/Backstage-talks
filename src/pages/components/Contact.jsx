import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className=" fixed mt-0 right-4 bottom-0 text-right top-[2rem] mr-[10px] w-[12rem] h-[1rem] ">
        <Link
        href='/'>info@backstagetalks.com</Link>
    </div>
  )
}

export default Contact