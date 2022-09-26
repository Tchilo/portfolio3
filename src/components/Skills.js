import h from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js  from '../assets/skills/javascript.png'
import node from '../assets/skills/node.png'
import mongo from '../assets/skills/mongo.png'
import next from '../assets/skills/nextjs.png'
import react from '../assets/skills/react.png'
import tail from '../assets/skills/tailwind.png'
import git from '../assets/skills/github1.png'
import fire from '../assets/skills/firebase.png'



const Skills = () => {
  return (
    <div id="Skills" className="p-5 mt-[70px]">
      <div className="md:text-center">
        <span className='uppercase text-xl tracking-widest text-[#5651e5]' >Skills</span>
        <h2 className="py-4">What I can do</h2>

        <div className="lg:my-0 mx-auto w-full pt-9">
          <ul className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-4">
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={h} width={64} height={64} alt='' />
              <p>HTML</p>
            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={css} width={64} height={64} alt='' />
              <p>CSS</p>

            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={js} width={64} height={64} alt='' />
              <p>JavaScript</p>

            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={node} width={64} height={64} alt='' />
              <p>Node</p>

            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={mongo} width={64} height={64} alt='' />
              <p>Mongo</p>

            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={next} width={64} height={64} alt='' />
              <p>Nextjs</p>

            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={react} width={64} height={64} alt='' />
              <p>React</p>

            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={tail} width={64} height={64} alt='' />
              <p>Tailwind</p>

            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={git} width={64} height={64} alt='' />
              <p>Github</p>

            </li>
            <li className="shadow-xl flex justify-around items-center p-2 mb-2 ">
              <img src={fire} width={64} height={64} alt='' />
              <p>Firebase</p>

            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
