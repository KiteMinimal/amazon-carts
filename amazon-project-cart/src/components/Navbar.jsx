import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-10 py-5 flex items-center justify-between'>
        <h3>orange</h3>
        <div className='flex p-2 px-3 rounded-lg bg-orange-600 text-white text-sm gap-3'>
            <h2>Favourite</h2>
            <h3>{data.filter((elem)=> {return elem.added === true}).length}</h3>
        </div>

    </div>
  )
}

export default Navbar