import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Issue5 = () => {
  return (
    <div className=' flex w-screen h-screen  border border-abi mt-24 bg-abi  items-center justify-center'>
        <div className=' w-screen flex flex-col items-center justify-center'>
            <Image
            className=' items-center'
            src={"/img/backstagetalks_cover_issue_5.png"}
            alt="/"
            width="420"
            height="532"  
            />
          <p className='  w-[9rem] h-[4rem] text-center'>Issue #4</p>
        </div>


    </div>
  )
}

export default Issue5