import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  )
}

export default Home