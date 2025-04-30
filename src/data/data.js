import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaTasks, FaCloud, FaReact,FaBook  } from "react-icons/fa";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon:<FaReact/>,
    title: "Web Development",
    des: "HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB.I develop full-stack web applications with the MERN stack and real-time apps with authentication using WebSockets, Socket.io, and JWT.",
  },
  {
    id: 2,
    icon: <FaMobile />,
    title: "App Development",
    des: "Java, Firebase, Android Studio",
  },
  {
    id: 3,
    // icon: <SiProgress />,
    icon: <FaCloud  />,
    title: "Deployment & Devops",
    des: "AWS (EC2, S3, IAM), Docker, Containerization, Virtualization, Github Actions, Basic Linux Shell, CI/CD pipeline",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "Data Science & Machine Learning",
    des: "Python, scikit-learn, NumPy, Matplotlib, Data Preprocessing, ML Algorithms, SVM, Data Visualization",
  },
  {
    id: 5,
    icon: <FaTasks />,
    title: "Testing & Quality Assurance",
    des: "Cypress, Manual Testing, Debugging, Error Handling",
  },
  {
    id: 6,
    icon: <FaBook   />,
    title: "Software Engineering Practices",
    des: "SDLC, Agile, WBS, Critical Path Analysis, Function Point Analysis, JIRA, Project Management Tools, Scrum, Kanban",
  },
];
