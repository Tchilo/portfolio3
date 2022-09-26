import { RiRadioButtonFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom';
import { FindCard } from '../data/Data';
import { Link } from 'react-router-dom';
const Details = () => {
  const { id } = useParams()
  const card = FindCard(id)
  return (
    <div className="w-full">
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        
        <img src={card.img} className='absolute z-1 object-cover h-[inherit] w-full'   alt={card.title} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10' >
          <h2>{card.title}</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, quasi quidem. Sapiente consectetur asperiores, placeat rerum quibusdam unde debitis similique sunt. Dicta vero possimus ea repellendus sunt saepe excepturi sequi!</p>
          <a href={card.liveLink} target='_blank'>
          <button className='px-8 py-2 mt-4 '>See Live</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-1'>
            <p className='text-center font-bold pb-2'>Tecnologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {card.languages.map((lang,index) => <p key={index} className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />
                {lang}
              </p>)}

            </div>
          </div>
        </div>
        <Link className='underline cursor-pointer' to='/'>
          Back Home
        </Link>
      </div>
    </div>
  )
}

export default Details