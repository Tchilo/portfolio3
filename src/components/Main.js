import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <div id='Home' className="w-full h-screentext-center pt-40">
      <div className='max-w-[1240px] w-full h-full mx-auto p-5 flex justify-center items-center flex-col text-center'>
        <h1 className='mb-6'>Hello, I&apos;m <span className="text-blue-400"> Taro</span><br /> A front-End web Developer</h1>
        <p className='max-w-[500px]'>I can build you fully responsive websites currently am focusing on web design and back-end development</p>
        <div className='mt-10'>
          <p className='uppercase text-blue-500 tracking-widest'>Let&apos;s connect</p>
          <ul className='flex items-center justify-between mt-4 md:w-[80%] gap-5'>
            <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
              <Link href='https://www.linkedin.com/in/taro-chilongoshi/'>
                
                  <FaLinkedinIn size={25} />
                
              </Link>
            </li>
            <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
              <Link href='https://twitter.com/tchiloross'>
                  <AiOutlineTwitter size={25} />
              </Link>
            </li>
            <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
              <Link href='mailto:tchiloross@gmail.com'>
                  <AiOutlineMail size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main
