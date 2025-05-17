import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Portfolio',
        description: "My portfolio project, built using the Next.js framework, showcases a modern and appealing design. It includes EmailJS for seamless email communication and a Telegram bot for instant notifications, making the portfolio both visually stunning and highly functional. The layout features interactive cards that display information in a code snippet format, providing a unique and engaging user experience. Leveraging Next.js's server-side rendering and static site generation capabilities, the portfolio ensures fast load times and optimal performance. ",
        tools: ['Next JS', 'React', 'Javacript', 'SCSS', 'Telegram Bot', 'EmailJs', 'Typescript', 'TailwindCSS',"Vercel"],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://vercel.app/',
        image: crefin,
    },
    {
        id: 2,
        name: 'ChatGPT Clone',
        description: ': Designed and developed a sophisticated ChatGPT clone web application focused on delivering a seamless and intuitive conversational AI experience. Built with modern web technologies, the project integrates advanced natural language processing capabilities, dynamic chat interactions, and real-time responses. Emphasis was placed on clean UI/UX using TailwindCSS for responsive design, and efficient frontend-backend communication to ensure fast, reliable performance. The platform demonstrates strong problem-solving skills, attention to detail, and a commitment to creating an engaging AI assistant interface.',
        tools: ['NextJs','Typescript', 'OpenAI API', "Javascript", "TailwindCSS","Vercel"],
        role: 'Developer && Designer',
        code: '',
        demo: 'vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'Ecommerce Website',
        description: ': Designed and developed both the frontend and backend of the BinkeyIT website, delivering a full-stack solution that combines a sleek, responsive user interface with robust server-side functionality. The frontend was built using React, Vite, and TailwindCSS to ensure an engaging and mobile-friendly experience with smooth animations and intuitive navigation. On the backend, modern technologies were employed to handle data management, user authentication, and API integration, ensuring fast and secure performance. This full-stack approach enabled seamless communication between client and server, providing users with a reliable and polished digital platform.',
        tools: ['React', 'Vite', "Javascript", "TailwindCSS","MongoDB",],
        role: 'Developer && Designer',
        code: '',
        demo: 'https://google.com',
        image: travel,
    },
    
    {
        id: 4,
        name: 'Lern AI',
        description: 'Developed a dynamic Learn AI application frontend that provides users with the top 5 key insights based on their search queries. Leveraged React features such as Axios for fetching AI-generated data, React Router for smooth navigation, and hooks like useEffect, useState, and Context API for efficient state management and centralized data flow. The app delivers concise, relevant information in an intuitive interface, enhancing the learning experience through responsive design and real-time updates.',
        tools: ['React', 'TailwindCSS', 'JavaScript', 'Vite','Context API','Google PamAPI'],
        code: '',
        role: 'Developer && Designer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: '',
        description: "",
        tools: [],
        code: '',
        demo: '',
        image: ayla,
        role: 'Developer && Designer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },