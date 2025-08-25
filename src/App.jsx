import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import { createBrowserRouter, RouterProvider,BrowserRouter } from 'react-router-dom'
import About from './componants/ABOUT/About';
import Contact from './componants/Contact/Contact';
import Navbar from './componants/Navbar/Navbar';
import Home from './componants/Home/Home';
import Portfolio from './componants/Portfolio/Portfolio';
import Layout from './componants/Layout/Layout';






function App() {
  // const [count, setCount] = useState(0)
  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [{index: true, element: <Home />},
        {
          path: "/home", element: <Home />},
          {path: "/about", element: <About />},
          {path: "/portfolio", element: <Portfolio />},
          {path: "/contact", element: <Contact />},
      ],
    },
  ]);

  return <RouterProvider router={routes} />
  //     <BrowserRouter>
  //        <Navbar/> 


  //        {/* <Home/>  */}

  // {/*       
  //          <About/> */}
  //          <Contact/> 
  //         {/* <Portfolio/> */}

  //     </BrowserRouter>

}

export default App
