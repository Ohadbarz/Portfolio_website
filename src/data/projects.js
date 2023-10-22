import OSR from '../assets/OSR.png';
import NLP from '../assets/NLP.jpg';
import socialNetwork from '../assets/socialNetwork.jpg';
import portfolio from '../assets/Portfolio.png';
import pizzeria from '../assets/pizzeria.jpg';
import Studio from '../assets/studio.jpg';



export const projects = [
    {
        id: 1,
        name: 'Open Set Recognition',
        description: 'Recognizing unknown classes in a classification problem',
        frameworks: "Used: Python, PyTorch, Scikit-Learn, Matplotlib, Numpy",
        link: "https://github.com/Ohadbarz/Project_Open_Set_Recognition",
        img: OSR
    },
    {
        id: 2,
        name: 'Rating Classification By Text',
        description: 'Given a review about a drug, predict the rating of the review on a scale of 1-10/ GOOD-OK-BAD',
        frameworks: "Used: Python, Pandas, PyTorch, Sklearn, NumPy, matplotlib, CountVectorizer, Lemmatization",
        link: "https://github.com/Ohadbarz/NLP_rating_classification_by_text",
        img: NLP
    },
    {
        id: 3,
        name: 'Social Network',
        description: 'Server And Client for Social Network',
        frameworks: "Used: Java, C++, Thread Per Client(TPC), Reactor",
        link: "https://github.com/Ohadbarz/Social_Network",
        img: socialNetwork
    },
    {
        id: 4,
        name: 'Personal Website',
        description: 'Portfolio Website',
        frameworks: "Used: React, TailwindCSS, CSS, React Router, JavaScript",
        link: "",
        img: portfolio
    },
    {
        id: 5,
        name: 'Pizzeria',
        description: 'Pizzeria Orders Management',
        frameworks: "Used: Python, SQL, sqlite3, DAO",
        link: "https://github.com/Ohadbarz/Pizzeria",
        img: pizzeria
    },
    {
        id: 6,
        name: 'Fitness Studio Management System',
        description: 'Management system including: studio, trainers, workouts, customers, orders, etc.',
        frameworks: "Used: C++, OOP",
        link: "https://github.com/Ohadbarz/Fitness_Studio_Management_System",
        img: Studio
    }
];
