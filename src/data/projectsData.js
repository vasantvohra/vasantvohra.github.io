import atadc from '../assets/svg/projects/ATADC.png'
import ai from '../assets/svg/projects/AI.jpeg'
import indico from '../assets/svg/projects/indico.gif'

export const projectsData = [
    {
        id: 1,
        projectName: 'Indico.UN',
        projectDesc: 'Indico.UN hosts multiple UN organizations in-person, hybrid, and virtual-only conferences with their respective sessions, consisting of many different sub-modules/workflows for different useful purposes, like registrations, paper reviewing, abstracts, etc.',
        tags: ['Python', 'Flask', 'React'],
        code: 'https://github.com/indico/indico',
        demo: 'https://indico.un.org',
        image: indico
    },
    {
        id: 2,
        projectName: 'AI on the cloud',
        projectDesc: 'This project is a consolidated AI Web Application with multiple applications, such as Signature Extraction and Verification,' +
            'Waste Segregation, Object Detection, Automatic License Plate Recognition',
        tags: ['AI', 'Python', 'Django'],
        code: 'https://github.com/vasantvohra/AI-WebAPP',
        demo: 'https://github.com/vasantvohra/AI-WebAPP',
        image: ai
    },
    {
        id: 3,
        projectName: 'American Turkish Association of Washington, DC (ATA-DC)',
        projectDesc: 'Website customization & management for an NGO, and Integrating Paypal Payment gateway',
        tags: ['Wordpress', 'Paypal', 'Spreadsheets'],
        code: '',
        demo: 'https://atadc.org/',
        image: atadc
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/