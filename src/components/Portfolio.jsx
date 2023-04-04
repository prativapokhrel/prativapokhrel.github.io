import React from 'react'
import conx from '../assets/conx.jpg';
import camplify from '../assets/camplify.jpg';
import shiftcare from '../assets/shiftcare.jpg';
import banba from '../assets/banba.jpg';
import shopify from '../assets/shopify.jpg';
import smaregi from '../assets/smaregi.jpg';
import hlab from '../assets/hlab.jpg';
import suicide_analysis from "../assets/suicide_analysis.jpg";

// import {Link} from "react-scroll";

// import tailwind from '../assets/tailwind.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: conx,
            link: "https://www.conx.co/",
            description: "Pre-construction, made simple"
        },
        {
            id: 2,
            src: camplify,
            link: "https://www.camplify.com.au/",
            description: "Find an RV"
        },
   
        {
            id: 3,
            src: banba,
            link: "https://www.banbagroup.com/",
            description: "Blog Post"
        },
        {
            id: 4,
            src: shiftcare,
            link: "https://shiftcare.com/",
            description: "Shift management"
        },
        {
            id: 5,
            src: shopify,
            link: "https://apps.shopify.com/japan-order-csv",
            description: "Shopify Data Formatter"
        },

        {
            id: 6,
            src: smaregi,
            link: "https://corp.smaregi.jp/en/service/smaregi.php",
            description: "Shopify with Smaregi(Japanese POS System)"
        },

        {
            id: 7,
            src: hlab,
            link: "https://my.h-lab.co/",
            description: " Application site for HLAB"
        },
        {
            id: 8,
            src: suicide_analysis,
            link: "https://github.com/prativapokhrel/suicide_analysis_tableau",
            description: "World Suicide Rate Analysis using Tableau"
        }
    ]
  return (
    <div name="portfolio" className='h-fit bg-gradient-to-b from-gray-800 to-black w-full text-white
    '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full text-white' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
            </div>
            <div className='w-full grid md:grid-cols-3 ms:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({ id, src, description, link}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <a href={link} target="_">
                            <img src={src} alt="" className='h-3/4 w-full mx-auto rounded-md duration-200 hover:scale-105' />
                        </a>
                        <div className='flex items-center mx-3 justify-center pt-8 font-bold'>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Portfolio