import React from 'react'
import {BiRightArrowCircle} from "react-icons/bi"
import {Link} from "react-scroll";
// import cover_img from "../assets/cover_image.jpg";

const Home = () => {
  return (
    <div 
        name="home"
        className='h-screen w-full bg-gradient-to-b from-black
        to-gray-800'>
            {/* <img src={cover_img} alt="" className="w-full h-full object-cover absolute mix-blend-overlay" /> */}
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h3 className='text-4xl sm:text-4xl font-bold'>
                    Hello, I am Prativa Pokhrel. 
                      
                </h3>
                <h3 className='text-4xl sm:text-4xl font-bold'>
                    I am a  full-stack software developer.
                </h3>
                <div>
                    <Link
                        to="portfolio"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r to-cyan-700 from-indigo-900 cursor-pointer"    
                    >
                    Portfolio
            
                    <span className='group-hover:rotate-90 duration-300'>
                        <BiRightArrowCircle size={25}
                        className="ml-1"
                        />
                    </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;