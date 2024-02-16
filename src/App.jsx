import './App.css'
import { CiMail } from "react-icons/ci";
import img from '../src/assets/dp.jpg'
import { FaGithub } from "react-icons/fa";
import { PiVideoBold } from "react-icons/pi";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLaptopCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
function App() {
  const [typeEffect]= useTypewriter({
    words:["Hey There, I'm Eben"],
    loop:2,
    typeSpeed:150,
    deleteSpeed:80
  })
  return (
   
    <div className='h-fit'> 
    {/* Desktop */}
   <nav className="flex justify-between items-center mx-6 p-2 md:mx-16 md:p-4 border-b-2 border-teal-800/10 ">
    <div className="font-brand tracking-wider md:text-4xl text-4xl font-semibold text-teal-950">Coding Paw</div>

    <div >
      <ul className='hidden md:flex md:space-x-9 font-text justify-center items-center tracking-widest md:text-lg uppercase font-medium'>
        <a href=""><li className='text-green-700 font-semibold outline-double outline-teal-800 outline-2 outline-offset rounded-xl py-1 px-2'>About</li>
        </a>
        <li>Services</li>
        <li>Notes</li>
        <li>Experience</li>
      </ul>
    </div>
    <div>
      <CiMail size={50} className='shadow-lg rounded-3xl p-2'/>
    </div>
   </nav>
    {/* Hero Section */}
    <section className="hidden md:flex  mx-16 p-4 my-10 ">
        <div className="flex flex-row justify-between  gap-10">
      <div className="flex flex-col justify-start items-start space-y-32">
      <div>
      <h1 className='font-head md:text-[60px] text-teal-950'>
      
      {typeEffect}</h1>
      </div>
      <div className="font-text font-bold text-green-900 tracking-wider">
        <span>abegundeebenezer2004@gmail.com</span>
      </div>
      <div className="flex flex-row items-center justify-center ">
        <span className='font-head md:text-4xl text-green-900'>3</span>
        <span className='font-text md:text-xl font-semibold'>Years Experience</span>
      </div>
     
  </div>

  <div className="flex justify-center items-center">
    <img src={img} className='rounded-xl' alt="" />
  </div>
  
  <div className="flex flex-col justify-center items-center space-y-32">
      <div>
      <p className='font-text md:text-xl'>I design beautifully simple things, and i love what i do</p>
      </div>
      <div className="font-text font-bold text-green-900 tracking-wider">
        <span>abegundeebenezer2004@gmail.com</span>
      </div>
     
     
  </div>

  </div>
      
    
     
     </section>
{/* Mobile */}
   <section className='md:hidden   flex flex-col md:h-fit mx-6 pt-8 my-8'>
    <div className='flex justify-startitems-start'>
    <h1 className='font-head text-[60px] text-teal-950'>
      
      {typeEffect}</h1>
    </div>
    <div className="">
      <p className='font-text text-3xl text-teal-900'>I design beautifully simple things, And i love what i do.</p>
    </div>
    <div className="">
      <img src={img} className='rounded-xl mt-4' alt="" />
    </div>
   </section>

   {/* What i do */}

        <section className="md:mx-12 pt-2 flex justify-center mx-6 mb-8">
          <div className="grid md:grid-cols-2 grid-cols-1   lg:px-32"> 
          <div className='flex md:hidden lg:hidden flex-col'>
              <h2 className=' md:text-[40px] font-head text-teal-950 text-[50px] text-center'>What do i help?</h2>
              <p className=' text-teal-900 text-center text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste a quis fugiat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo debitis sed porro!

              </p>
              <div className="grid grid-cols-2 place-items-center mt-4 gap-4">
                <div className="">
                <h3 className='font-head text-[45px]'>30+</h3>
                <p className='font-text text-xl whitespace-nowrap'>Project Completed</p>
                </div>
                <div className="">
                <h3 className='font-head text-[45px]'>50+</h3>
                <p className='font-text text-xl whitespace-nowrap'>Project Completed</p>
                </div>
                

                
              </div>
              </div>
            <div>
            
          <div className="grid grid-row-3 gap-10 pt-4">
                <div className="bg-white md:w-72 w-96 text-center h-fit shadow-lg shadow-gray-400 rounded-xl">
                      <div className="flex flex-row justify-center items-start p-8 space-x-4">
                      <div className='bg-yellow-400 p-3 rounded-full'>
                      <FaLaptopCode size={40} />
                      </div>
                      <div className="">
                        <h3 className='font-head text-teal-950 md:text-[20px] whitespace-nowrap'>Website Design</h3>
                        <p className="font-text text-teal-900 md:text-[15px]">  50+ Designs</p>
                      </div>
                      </div>
                </div>
                <div className="bg-white md:w-72 h-fit w-96 shadow-lg shadow-gray-400 rounded-xl">
                      <div className="flex flex-row justify-center items-start p-8 space-x-4">
                        <div className='bg-red-400 p-3 rounded-full'>
                        <MdDesignServices size={40} />
                      </div>
                      <div className="">
                        <h3 className='font-head text-teal-950 md:text-[20px] whitespace-nowrap'>Graphic Deisgn</h3>
                        <p className="font-text text-teal-900 md:text-[15px]">  60+ Designs</p>
                      </div>
                      </div>
                </div>
                <div className="bg-white md:w-72 w-96 h-fit shadow-lg shadow-gray-400 rounded-xl">
                      <div className="flex flex-row justify-center items-start p-8 space-x-4">
                      <div className='bg-orange-400 p-3 rounded-full'>
                        <PiVideoBold size={40} />
                      </div>
                      <div className="">
                        <h3 className='font-head text-teal-950 md:text-[20px] whitespace-nowrap'>Video Editing</h3>
                        <p className="font-text text-teal-900 md:text-[15px]">  30 Projects</p>
                      </div>
                      </div>
                </div>
              </div>
              </div>
              {/* 2 */}
              <div className='hidden md:flex flex-col items-start'>
              <h2 className='md:text-[40px] font-head text-teal-950'>What do i help?</h2>
              <p className='font-text py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in eum quaerat. 

              </p>
              <p className='font-text py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in eum quaerat. 

              </p>
               <div className="grid grid-cols-2 place-items-center mt-4 gap-8">
                <div className="">
                <h3 className='font-head text-[45px]'>30+</h3>
                <p className='font-text text-xl '>Project Completed</p>
                </div>
                <div className="">
                <h3 className='font-head text-[45px]'>50+</h3>
                <p className='font-text text-xl '>Project Completed</p>
                </div>
                

                
              </div>
              </div>
          </div>
        </section>

    </div>
  )
}

export default App
