import ProjectItem from './ProjectItem';
import Data from '../data/Data';
const Projects = () => {
  return (
    <div id='Projects' className='p-4  md:text-center'>
      <span className='uppercase text-xl tracking-widest text-[#5651e5] '>Projects</span>

      <h2 className='py-4'>What I have Built</h2>

      <div>
        <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          <ProjectItem
            projectCards={Data}
          />
        </ul>
      </div>
    </div>
  )
}

export default Projects
