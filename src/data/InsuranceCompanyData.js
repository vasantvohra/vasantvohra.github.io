import cover from '../assets/svg/about/CoversDBDiagram.svg'
import corporate from "../assets/svg/about/corporate.png";
import {FaCalendar, FaCoffee, FaRobot} from "react-icons/fa";
import {BsCodeSlash, BsFileEarmarkCode} from "react-icons/bs";
import {ImDatabase, TiDocumentText} from "react-icons/all";

export const headerData = {
    name: 'Vasant Vohra',
    title: "",
    description: "I am passionate about using technology to make a positive difference in the world. Working on impact driven solutions for the world.",
    image: "",
    resumePdf: ''
}

export const aboutData = {
    title: "About the product ...",
    description1: "",
    description2: "",
    description3: "I have a great amount of perseverance to achieve my goal. My optimistic and planned approach in things I do is what drives me towards my success.",
    image:cover
}


export const ConceptData = {
    title: "Concept ...",
    description1: "",
    description2: "",
    description3: "I have a great amount of perseverance to achieve my goal. My optimistic and planned approach in things I do is what drives me towards my success.",
    image: cover
}

export const DesignData = {
    title: "Concept ...",
    description1: "",
    description2: "",
    description3: "I have a great amount of perseverance to achieve my goal. My optimistic and planned approach in things I do is what drives me towards my success.",
    image: cover
}

export const DevelopmentData = {
    title: "Development ...",
    description1: "",
    description2: "",
    description3: "I have a great amount of perseverance to achieve my goal. My optimistic and planned approach in things I do is what drives me towards my success.",
    image: cover
}



export const ConsultancyData = [
    {
        id: 1,
        title: 'Product Conceptualise & Design',
        icon: <TiDocumentText/>
    },
    {
        id: 1,
        title: 'Interview Technical Colleagues',
        icon: <TiDocumentText/>
    },
    {
        id: 1,
        title: 'Frame technical specifications',
        icon: <TiDocumentText/>
    },
    {
        id: 2,
        title: 'Project Manager',
        icon: <FaCalendar/>
    },
    {
        id: 3,
        title: 'System Design & Architecture',
        icon: <ImDatabase/>
    },
    {
        id: 4,
        title: 'Full Stack Web App Developer',
        icon: <BsCodeSlash/>
    },
    {
        id: 5,
        title: 'Python Code Reviewer',
        icon: <FaCoffee/>
    },
    {
        id: 5,
        title: 'Deployment',
        icon: <FaCoffee/>
    },
]

export const TechStackData = [
    'Figma',
    'Git',
    'Python',
    'Django',
    'PostgreSQL',
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'AWS',
    'Nginx',
    'Bootstrap'
]