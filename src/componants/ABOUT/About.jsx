import React from 'react'

function About() {
  return (
    <>
      
      <div className='bg-[#1abc9c] h-dvh flex justify-content-center items-center flex-col'>

          <Mainheader className="mt-44">about component</Mainheader> 

          <div className="flex  justify-content-center items-center  flex-wrap text-white sm:w-1/2">
            <p className='  sm:p-5 p-2 sm:w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript 
              as well as optional SASS stylesheets for easy customization</p>
            <p className=' sm:p-5  p-2 sm:w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript
            as well as optional SASS stylesheets for easy customization</p>
          </div>

      </div>
    
    </>


  )
}
export default About

function Mainheader({children}){



    return( 
    <>
    <h2 className=' Mainheader text-capitalize  mt-10 font-bold  text-3xl text-white position-relative text-center'>{children}</h2>
    <i className=" mt-2 fa-solid fa-star position-relative text-white "></i>
    
    </>);

}