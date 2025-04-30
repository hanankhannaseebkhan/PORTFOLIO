import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Daraz Clone"
          des="HTML, CSS, JavaScript, Tailwind CSS.
               A responsive frontend clone of the Daraz platform with a clean design, showcasing products in a structured layout for an improved user experience."
          src={projectOne}
        />
        <ProjectsCard
          title="QuickBite (Food Ordering App)"
          des="  React, Node.js, Express.js, MongoDB
                 A food ordering platform designed for users to browse and order food online."
          src={projectTwo}
        />
        <ProjectsCard
          title="Job Portal"
          des="HTML, CSS, JavaScript, React
               A responsive job portal where users can search for jobs and add job listings. Built with React for smooth interaction and dynamic filtering."
          src={projectThree}
        />
        <ProjectsCard
          title="Hanan Blog"
          des=" HTML, CSS, JavaScript, React, Firebase
                A blogging platform where users can perform CRUD operations (Create, Read, Update, Delete) on blog posts. Data is stored and managed using Firebase in real time."
          src={projectThree}
        />
        <ProjectsCard
          title="Chat Application"
          des=" HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, WebSockets, Socket.io, JWT
                A real-time chat app built with the MERN stack and Socket.io for instant messaging. Features include JWT-based authentication, private/group chat rooms, and message history stored in MongoDB."
          src={projectOne}
        />
        <ProjectsCard
          title="Hostel Hub"
          des="  MongoDB, Express.js, React, Node.js, JWT, Firebase
                 A MERN stack-based hostel management system for room booking, resident management, and booking history. Features include JWT authentication, real-time updates with Firebase, and a responsive admin panel."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects