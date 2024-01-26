import './App.css'
import { CiMail } from "react-icons/ci";
import img from '../src/assets/dp.jpg'
import { FaGithub } from "react-icons/fa";
function App() {

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
      <h1 className='font-head  md:text-[50px]'> Hey There, <br/> I'm Eben</h1>
      </div>
      <div className="font-text font-bold text-green-900 tracking-wider">
        <span>abegundeebenezer2004@gmail.com</span>
      </div>
      <div className="flex flex-row items-center justify-center">
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
   <section className='md:hidden flex flex-col h-fit mx-6 pt-8'>
    <div className='flex justify-startitems-start'>
    <h1 className='font-head text-[60px] text-teal-950'>Hey There,<br/> I'm Eben</h1>
    </div>
    <div className="">
      <p className='font-text text-3xl text-teal-900'>I design beautifully simple things, And i love what i do.</p>
    </div>
    <div className="">
      <img src={img} className='rounded-xl mt-4' alt="" />
    </div>
   </section>

   {/* What i do */}

        <section className="md:mx-12 pt-4 flex justify-center mx-6 mb-8">
          <div className="grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center  ">
          <div className='flex md:hidden flex-col'>
              <h2 className=' md:text-[40px] font-head text-teal-950 text-4xl text-center'>What do i help?</h2>
              <p className=' text-teal-900 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste a quis fugiat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo debitis sed porro!

              </p>
              </div>
            <div>
            
          <div className="grid grid-row-3 gap-10 pt-4">
                <div className="bg-white md:w-72 w-96 text-center h-fit shadow-lg shadow-gray-400 rounded-xl">
                      <div className="flex flex-row justify-center items-start p-8 space-x-4">
                      <div className='bg-yellow-400 p-2 rounded-3xl'>
                      <FaGithub size={40} />
                      </div>
                      <div className="">
                        <h3 className='font-head text-teal-950 md:text-[20px]'>Website Design</h3>
                        <p className="font-text text-teal-900 md:text-[15px]">  50+ Projects</p>
                      </div>
                      </div>
                </div>
                <div className="bg-white md:w-72 h-fit w-96 shadow-lg shadow-gray-400 rounded-xl">
                      <div className="flex flex-row justify-center items-start p-8 space-x-4">
                        <div className='bg-red-400 p-2 rounded-3xl'>
                      <FaGithub size={40} />
                      </div>
                      <div className="">
                        <h3 className='font-head text-teal-950 md:text-[20px]'>Website Design</h3>
                        <p className="font-text text-teal-900 md:text-[15px]">  50+ Projects</p>
                      </div>
                      </div>
                </div>
                <div className="bg-white md:w-72 w-96 h-fit shadow-lg shadow-gray-400 rounded-xl">
                      <div className="flex flex-row justify-center items-start p-8 space-x-4">
                      <FaGithub size={40} />
                      <div className="">
                        <h3 className='font-head text-teal-950 md:text-[20px]'>Website Design</h3>
                        <p className="font-text text-teal-900 md:text-[15px]">  50+ Projects</p>
                      </div>
                      </div>
                </div>
              </div>
              </div>
              {/* 2 */}
              <div className='hidden'>
              <h2 className='md:text-[40px] font-head text-teal-950'>What do i help?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste a quis fugiat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo debitis sed porro!

              </p>
              </div>
          </div>
        </section>

    </div>
  )
}

export default App
