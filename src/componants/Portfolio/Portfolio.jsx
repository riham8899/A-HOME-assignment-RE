import React, { useState } from 'react'


import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"
const imageList = [img1, img2, img3, img1, img2, img3];

function Portfolio() {
  const [isOpen, setopen] = useState(null);


  function handeltOpen(number) {
    setopen(number)

  }


  console.log(imageList);


  return (
    <div className="container flex justify-content-center items-center flex-column">
      <Mainheader>portfolio component</Mainheader>
      <div className='flex  flex-wrap mx-28'>
        {imageList.map((elem, index) => (
          <Card key={index} image={elem} number={index} onhandelmodel={handeltOpen} />
        ))}
      </div>
      {console.log(isOpen)};

      {isOpen !== null ? <Model onhandelmodel={setopen} image={imageList[isOpen]} number={isOpen} /> : null}
    </div>


  );
}

export default Portfolio

function Card({ image, onhandelmodel, number }) {


  return (<div className='w-full sm:w-1/2 md:w-1/3 p-3 cursor-pointer'>
    <img className='w-full right-2' src={image} alt='gg' onClick={() => onhandelmodel(number)} />
  </div>

  );
}



function Model({ image, onhandelmodel, number }) {
  return (
    <div className=' absolute  inset-0  flex justify-content-center align-items-center bg-slate-500  bg-opacity-35 h-dvh ' onClick={(e) => {
      
        console.log(e,"hoh");
      onhandelmodel(null);
}}>

      <div className="w-1/4 mx-auto  mt-24   flex justify-content-center align-items-center ">
        <i class="fa-solid fa-arrow-left bg-light  p-3  ps-2" onClick={(e) => { e.stopPropagation(); onhandelmodel(number == 0 ? imageList.length - 1 : number - 1) }}></i>
        <img className=" w-full m-auto" src={image} alt='' />

        <i class="fa-solid fa-arrow-right bg-light p-3 ps-2 " onClick={(e) => { e.stopPropagation(); onhandelmodel(number == imageList.length - 1 ? 0 : number + 1) }}></i>

      </div>

    </div>
  )

}





function Mainheader({ children }) {



  return (
    <>
      <h2 className=' line  text-capitalize  mt-10 font-bold  text-4xl  text-[#2c3e50] position-relative text-center pt-20'>{children}</h2>
      <i className=" mt-2 fa-solid fa-star position-relative  text-[#2c3e50]  "></i>

    </>);

}