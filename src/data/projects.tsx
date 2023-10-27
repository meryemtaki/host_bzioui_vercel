import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'

interface Project {
  imageRoute: string
  name: string
}

export const projects: Project[] = [
  {
    imageRoute: project1,
    name: 'Projet 1',
  },
  {
    imageRoute: project2,
    name: 'Projet 2',
  },
  {
    imageRoute: project3,
    name: 'Projet 3',
  },
  {
    imageRoute: project4,
    name: 'Projet 4',
  },
  {
    imageRoute: project5,
    name: 'Projet 5',
  },
  {
    imageRoute: project6,
    name: 'Projet 6',
  },
]
