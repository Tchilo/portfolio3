import work1 from '../assets/projects/work-1.png';
import work2 from '../assets/projects/work-2.png';
import work3 from '../assets/projects/work-3.png';
import work4 from '../assets/projects/work-4.png';
import work5 from '../assets/projects/work5.png';
// import work6 from '../assets/projects/'

const Data = [
  {
    title: 'Calculator',
    img: work1,
    id: 1,
    languages: ['Html', 'Css', 'JavaScript', 'React'],
    liveLink: 'https://math-magician-tchiloross.netlify.app/App'
  },
  {
    title: 'Equalizer Landing Page',
    img: work2,
    id: 2,
    languages: ['Html', 'Sass', 'JavaScript', 'Parcel'],
    liveLink: 'https://equalizer-delta.vercel.app/'
  },
  {
    title: 'Skilled Landing Page',
    img: work3,
    id: 3,
    languages: ['Html', 'Sass', 'JavaScript', 'Parcel'],
    liveLink: 'https://skill-elearning.netlify.app/'
  },
  {
    title: 'Space Travelers',
    img: work4,
    id: 4,
    languages: ['Html', 'Sass', 'JavaScript', 'React', 'Redux'],
    liveLink: 'https://spaceships.netlify.app/'
  },
  {
    title: 'Pod Landing Page',
    img: work5,
    id: 5,
    languages: ['Html', 'Sass', 'JavaScript', 'Parcel'],
    liveLink: 'https://pod-request-access.netlify.app/'
  }
]





export const FindCard = (id) => {
  return Data.find((card) => {
    if (card.id == Number(id)) {
      return card
    }
  })
}

export default Data;

//  const card1 = FindCard(1)

// console.log(card1);