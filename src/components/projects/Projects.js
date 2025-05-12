import React from 'react';
import Title from '../layouts/Title';
import {
  projectOne,
  projectTwo,
  projectThree,
  projectfour,
  projectfive,
  projectsix,
  projectseven,
  projecteight,
} from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Daraz Clone"
          des="HTML, CSS, JavaScript, Tailwind CSS..."
          src={projectOne}
          githubLink="https://github.com/hanankhannaseebkhan/Daraz_clone"
          liveLink="https://daraz-clone-wine.vercel.app/"
        />
        <ProjectsCard
          title="QuickBite (Food Ordering App)"
          des="React, Node.js, Express.js, MongoDB..."
          src={projectTwo}
          githubLink="https://github.com/hanankhannaseebkhan/quickbite"
          liveLink="https://quickbite-new.vercel.app/"
        />
        <ProjectsCard
          title="Job Portal"
          des="HTML, CSS, JavaScript, React..."
          src={projectThree}
          githubLink="https://github.com/hanankhannaseebkhan/jobportal"
        />
        <ProjectsCard
          title="Hanan Blog"
          des="HTML, CSS, JavaScript, React, Firebase..."
          src={projectfour}
          githubLink="https://github.com/hanankhannaseebkhan/hanan_blog"
        />
        <ProjectsCard
          title="Chat Application"
          des="MERN stack + WebSockets, Socket.io, JWT..."
          src={projectfive}
          githubLink="https://github.com/hanankhannaseebkhan/chat_app"
        />
        <ProjectsCard
          title="Hostel Hub"
          des="MERN stack + JWT + Firebase real-time..."
          src={projectsix}
          githubLink="https://github.com/yourusername/hostel-hub"
        />
        <ProjectsCard
          title="E-commerce GooglePay"
          des="React, Express.js, Node.js..."
          src={projectseven}
          githubLink="https://github.com/hanankhannaseebkhan/E-comm_GooglePAY"
          liveLink="https://e-comm-google-pay.vercel.app/"
        />
        <ProjectsCard
          title="Bill Management"
          des="React, Node.js, MongoDB, Dauda_kolo API..."
          src={projecteight}
          githubLink="https://github.com/yourusername/bill-management"
        />
      </div>
    </section>
  );
};

export default Projects;
