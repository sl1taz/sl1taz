import React from 'react'

export default function Menu() {
    return (
        <ul className="flex flex-col gap-2 duration-500  w-40">
            <li className='menu_list  hover:bg-black group'>
                <span className='text-base text group-hover:text-light'>All Posts</span>
            </li>
            <li className='menu_list  hover:bg-black group'>
                <span className='text-base text group-hover:text-light'>HTML</span>
            </li>
            <li className='menu_list  hover:bg-black group'>
                <span className='text-base text group-hover:text-light'>CSS</span>
            </li>
            <li className='menu_list  hover:bg-black group'>
                <span className='text-base text group-hover:text-light'>JavaScript</span>
            </li>
            <li className='menu_list  hover:bg-black group'>
                <span className='text-base text group-hover:text-light'>Tutorials</span>
            </li>
            <li className='menu_list  hover:bg-black group'>
                <span className='text-base text group-hover:text-light'>Search</span>
            </li>
        </ul>
    )
}
