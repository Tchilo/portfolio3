import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineGithub, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] mb-96 bg-[#ecf0f3]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h2>TC</h2>
        <div>
          <ul className='hidden md:flex '>
            <Link to='/#Home'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link to='/#About'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link to='/#Skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link to='/#Projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link to='/#Contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div className='md:hidden'>
            < AiOutlineMenu size={25} onClick={handleClick} />
          </div>
          {nav &&
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
              <div className="fixed left-0 top-0 w-[75%] h-screen sm:w-[60%] md:w-[60%] bg-[#ecf0f3] p-10 ease-in duration-500" >
                <div>
                  <div className='flex justify-between items-center w-full'>
                    <div className=''>
                      <h2>TC</h2>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-1' >
                      <AiOutlineClose onClick={handleClick} size={25} />
                    </div>
                  </div>
                  <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s make the world better on app at a time</p>
                  </div>
                </div>

                <div className='py-4 '>
                  <ul className='flex flex-col gap-5 '>
                    <Link  to='/#Home'>
                      <li onClick={handleClick}className='text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link  to='/#About'>
                      <li onClick={handleClick}className=' text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link to='/#Skills'>
                      <li onClick={handleClick}  className=' text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link  to='/#Projects'>
                      <li onClick={handleClick}className='text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link  to='/#Contact'>
                      <li onClick={handleClick}className='text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                  </ul>

                  <div className='pt-40'>
                    <p className='uppercase text-blue-500 tracking-widest'>Let&apos;s connect</p>
                    <ul className='flex items-center justify-between mt-4 md:w-[80%]'>
                      <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                        <FaLinkedinIn size={25} />
                      </li>
                      <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                        <AiOutlineGithub size={25} />
                      </li>
                      <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                        <AiOutlineMail size={25} />
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar