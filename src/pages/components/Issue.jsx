import React from 'react'
import Link from 'next/link'
const Issue = () => {
  return (
    <>
      <div className=''>   
        <ul className=' fixed bottom-0 right-4 w-[200px] text-right z-[3] p-4'>
          <li>
            <Link href="/">
              issue #7
            </Link>
          </li>
          <li>
            <Link href="/">
              issue #6
            </Link>
          </li>
          <li>
            <Link href="/">
              issue #5
            </Link>            
          </li>
          <li>
            <Link href="/">
              issue #4
            </Link>                         
          </li>
          <li>
            <Link href="/">
              issue #3
            </Link>          
          </li>
          <li>
            <Link href="/">
              issue #2
            </Link>           
          </li>
          <li>
            <Link href="/">
              issue #1
            </Link>           
          </li>          
        </ul>
      </div>                
    </>
  )
}

export default Issue