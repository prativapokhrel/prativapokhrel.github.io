import React from 'react'
// import html from "../assets/html.png";
import {HiOutlineDesktopComputer} from "react-icons/hi"
import {MdModelTraining} from "react-icons/md";

const Expertise = () => {
  return (
    <div name="expertise" className='bg-gradient-to-b from-black to-gray-800
     w-full text-white md:h-screen h-full'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Expertise
                </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-10 px-12 sm:px-0'>
                    <div 
                        className='shadow-md shadow-gray-600 rounded-lg'>
                        <div className='flex items-center justify-center'>
                            <div class="card rounded-none">
                                <div className='my-5 flex items-center ml-10  space-x-6'>
                                    <HiOutlineDesktopComputer size={40} />
                                    <h2 className='text-2xl'>Software Development</h2>
                                </div>
                                <p className='px-10 py-10'>
                                Experienced in Ruby, Python, Java, JavaScript, jQuery, PostgreSQL, GraphQL, ReactJS, Heroku, CSS, TailwindCSS, Docker, Github, etc.
                                </p>
                        </div>
                        
                        </div>
                    </div>
                    <div 
                        className='shadow-md shadow-gray-600 rounded-lg'>
                        <div className='flex items-center justify-center'>
                            <div class="card rounded-none">
                                <div className='my-5 flex items-center ml-10 space-x-6'>
                                    <MdModelTraining size={40} />
                                    <h2 className='text-2xl'>Data Science</h2>
                                </div>
                                <p className='px-10 py-10'>
                                    Passionate about Data Science: Panda, Python, Scikit-learn, Hyperopt, Optuna, Boosting Algorithms, Data Modeling, Tableau, R, etc.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Expertise