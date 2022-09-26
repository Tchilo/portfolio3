// import Image from 'next/image';
import { Link } from 'react-router-dom';



const ProjectItem = ({ projectCards }) => {
  console.log(projectCards);
  return (

    projectCards && projectCards.map(({ title, id, liveLink, img }) =>
      <li className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#4c5c7e]' key={id} >
        <img className='rounded-xl group-hover:opacity-10' src={img} alt={title} />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white '>
          <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
          <Link to={`projects/${id}`} className='rounded-lg py-3  my-3 block text-center bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info
          </Link>
        </div>
      </li >)

  )
}

export default ProjectItem
