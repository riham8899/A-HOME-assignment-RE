import React, { useState } from 'react'


function Contact() {

  const [ischange, setchange] = useState({
    name:false,
    age:false,
    email:false,
    password:false,

  });

  function handelChange(e) {
    setchange((prev)=>({...prev,[e.target.id]:true}));
  }

  return (
    <>

      <div className=' h-dvh flex justify-content-center items-center flex-col'>
        <Mainheader className="  text-black">conatct section</Mainheader>
        <div className='mx-auto w-full sm:w-11/12 md:10/12 text-center'>
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="form-group position-relative py-2">
              <label htmlFor='name' className={` text-[#1abc9c] position-absolute  left--20 ${ischange.name ? "opacity-100  top--16" : "opacity-0 top-16"} transition-[opacity,top] duration-700`}>User Name:</label>
              <input onChange={handelChange} className=' w-1/2 outline-none border-b-2 mt-8' type='text' id='name' placeholder='enter name' />
            </div>
            <div className="form-group position-relative py-2">
              <label htmlFor='age' className={` text-[#1abc9c] position-absolute  left--20 ${ischange.age ? "opacity-100  top--16" : "opacity-0 top-16"} transition-[opacity,top] duration-700`}>User Age:</label>
              <input onChange={handelChange} className=' w-1/2 outline-none border-b-2 mt-8' type='age' id='age' placeholder='enter Age' />
            </div>
            <div className="form-group position-relative py-2">
              <label htmlFor='email' className={` text-[#1abc9c] position-absolute  left--20 ${ischange.email ? "opacity-100  top--16" : "opacity-0 top-16"} transition-[opacity,top] duration-700`}>User Email:</label>
              <input onChange={handelChange} className=' w-1/2 outline-none border-b-2 mt-8' type='email' id='email' placeholder='enter Email' />
            </div>
            <div className="form-group position-relative py-2">
              <label htmlFor='password' className={` text-[#1abc9c] position-absolute  left--20 ${ischange.password ? "opacity-100  top--16" : "opacity-0 top-16"} transition-[opacity,top] duration-700`}>User Password:</label>
              <input onChange={handelChange} className=' w-1/2 outline-none border-b-2 mt-8' type='password' id='password' placeholder='enter pasword' />
            </div>
            
            <button className='px-4 py-2 bg-[#1abc9c] rounded-2 '>Send massge</button>

  
          </form>
          
        </div>

      </div>
    
    </>

  )
}

export default Contact

function Mainheader({ children }) {



  return (
    <>
      <h2 className=' line  text-capitalize  mt-10 font-bold  text-3xl position-relative text-center  text-[#2c3e50] '>{children}</h2>
      <i className=" mt-2 fa-solid fa-star position-relative  text-[#2c3e50]  "></i>

    </>);

}