import React from 'react'

function Home() {
    return (
        <div className=' justify-content-center items-center  flex flex-col bg-[#1abc9c] h-dvh'>
            <img className='sm:w-1/2 md:w-1/4  lg:w-1/5 mt-28' src='/avataaars.svg' alt='' />
            <Mainheader >start Framework</Mainheader>
            <p className=' mt-2 text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    )
}

export default Home

function Mainheader({children}){



    return( 
    <>
    <h2 className=' Mainheader text-capitalize  mt-10 font-bold  text-3xl text-white position-relative'>{children}</h2>
    <i className=" mt-2 fa-solid fa-star position-relative text-white "></i>
    
    </>);

}