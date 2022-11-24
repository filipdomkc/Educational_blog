import React from 'react'
import Link  from 'next/link'
import {useState,useEffect} from 'react';
import { getCategories } from '../services';

  

const Header = () => {

    const [categories, setCategories] =useState([])
    
    useEffect(() => {
        getCategories()
        .then((newCategories)=>setCategories(newCategories))
    }, [])
  return (
    <div className='container mx-auto px-10 pt-8 mb-8'>
        <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 pt-12 mb-8 border-b w-full inline-block border-gray-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-black'>
                        Razmišljam naglas...
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents block'>
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
                    <Link href={`/omeni`}>
                        <span className='md:float-right mt2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                            O meni
                        </span>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default Header