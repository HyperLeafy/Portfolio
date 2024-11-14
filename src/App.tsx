import React, { useState } from 'react';
import './App.css';
import MyForm from './components/from';
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

interface Projects {
  name: string;
  details: string;
  url: string;
}

function App() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projectList: Projects[] = [
    {
      name: 'Portfolio',
      details: 'A collection of my work and projects, showcasing skills and experiences.',
      url:'https://github.com/HyperLeafy/Portfolio',
    },
    {
      name:'tasklt',
      details:'A todo list cli tool for terminal written in python',
      url: 'https://github.com/HyperLeafy/tasklt',
    },
    {
      name: 'ASCII Vision',
      details: 'An image to ASCII converter that transforms video feed into ASCII art in real-time.',
      url:'',
    },
    {
      name: 'LitReview',
      details: 'A tool for reviewing and organizing literature for research projects.',
      url:'https://github.com/HyperLeafy/LitReview',
    },
  ];

  // const skillList: string[] =["HTML","JavaScritp","TypeScript","","Tailswind","React",];

  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center border-b-2 p-2 h-fit">
        <h2  className='text-end lg:text-2xl text-3xl font-tomo '>HyperLeafy</h2>
        
        <div className='flex w-fit'>
          <ul className='flex'>

            <li className='scale-[2] px-2'>
              <a
                href="https://github.com/hyperleafy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="scale-150 transition-transform duration-200 hover:scale-175 hover:text-blue-600"
              >
                <FaSquareGithub />
              </a>
            </li>

            <li className='scale-[2] px-2'>
              <a
                href="https://x.com/L_04013"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="scale-150 transition-transform duration-200 hover:scale-175 hover:text-blue-400"
              >
                <FaSquareXTwitter />
              </a>
            </li>

          </ul>
        </div>
      </header>

      <section>
        {/* Hero Section */}
        <div className='flex h-fit md:h-[45vh] bg-slate-100 text-slate-800 text-start font-montserrat p-8 lg:p-10 items-center lg:justify-center text-7xl lg:text-9xl'>
            <p>
              Fueled by curiosity, Defined by <span className='font-tomo hover:underline transition-all ease-in delay-1000'>difference</span> 
            </p>
        </div>
      </section>

      <section className='flex flex-col md:flex-row font-montserrat w-full h-fit'>
        {/* About and skill section */}
        <div className='flex flex-col bg-slate-100 text-slate-800 p-4 flex-1 h-fit md:text-2xl xl:text-4xl'>
         <div className='bg-white p-8 rounded-lg shadow-lg border-slate-800 border-2 border-dashed transition-transform transform hover:scale-105 hover:z-10  hover:-translate-y-5 hover:translate-x-5 hover:shadow-2xl'>
            <h2 className='text-5xl font-tomo'>About me.</h2>
            <div className='flex-1 flex text-left p-6' >
              <p >
              I’m someone who loves exploring ideas and creating things that feel a little different. With a mix of curiosity and practicality, 
              I’m always looking to build solutions that stand out in subtle ways. If you’re into thoughtful, meaningful work, we might just get along.
              </p>
            </div>
          </div>
        </div>
        
        <div className='bg-slate-100 flex flex-col flex-1 md:text-2xl p-4 xl:text-4xl transition-all ease-in'>
          <div className='p-8 bg-white rounded-lg shadow-lg border-slate-800 border-2 border-dashed transition-transform transform hover:scale-105 hover:-translate-y-5 hover:-translate-x-5 hover:shadow-2xl'>
            <h2 className='text-5xl font-tomo'>Skill.</h2>
            <div className="flex text-4xl flex-row gap-5 p-6 flex-wrap ">
            <div className="w-fit h-fit p-2 flex items-center justify-center border-x-2 hover:border-y-slate-400 hover:border-y-2 hover:border-x-0 border-slate-400 rounded-lg shadow-lg transform">
              HTML
            </div>
            <div className="w-fit h-fit p-2 flex items-center justify-center bg-white rounded-lg shadow-lg border-x-2 hover:border-y-slate-400 hover:border-y-2 hover:border-x-0 border-slate-400 transition-all duration-2500 ease-in transform ">
              CSS
            </div>
            <div className="w-fit h-fit p-2 flex items-center justify-center bg-white rounded-lg shadow-lg border-x-2 hover:border-y-slate-400 hover:border-y-2 hover:border-x-0 border-slate-400 transform">
              JavaScript
            </div>
            <div className="w-fit h-fit p-2 flex items-center justify-center bg-white rounded-lg shadow-lg border-x-2 hover:border-y-slate-400 hover:border-y-2 hover:border-x-0 border-slate-400 transform">
              React
            </div>
            <div className="w-fit h-fit p-2 flex items-center justify-center bg-white rounded-lg shadow-lg border-x-2 hover:border-y-slate-400 hover:border-y-2 hover:border-x-0 border-slate-400 transform">
              Tailwind CSS
            </div>
            <div className="w-fit h-fit p-2 flex items-center justify-center bg-white rounded-lg shadow-lg border-x-2 hover:border-y-slate-400 hover:border-y-2 hover:border-x-0 border-slate-400 transform">
              Python
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col md:flex-row font-montserrat bg-slate-100 p-4 justify-between gap-5'>
        {/* Projects showcase */}
        <div className='flex-[1_1_30%] flex text-2xl '>
          <div className='bg-white p-8 w-full rounded-lg shadow-lg border-slate-800 border-2 border-dashed transition-transform transform hover:scale-105 hover:-translate-y-5 hover:z-10 hover:translate-x-6 hover:shadow-2xl'>
            <h2 className='text-5xl font-tomo'>Projects.</h2>
            <div className='p-4'>  
              <ul>
                {projectList.map((project, index) => (
                    <li
                      key={index}
                      className='text-grey-100  cursor-pointer transition-colors duration-300 hover:text-blue-400'
                      onMouseEnter={() => setActiveProject(index)}
                      // onMouseLeave={() => setActiveProject(null)}
                    >
                      {project.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex-[2_1_70%] flex bg-slate-300'>
          <div className='bg-white p-8 w-full rounded-lg shadow-lg border-slate-800 border-2 border-dashed transition-transform transform hover:scale-105 hover:-translate-y-5 hover:z-10 hover:-translate-x-6 hover:shadow-2xl'>
            {activeProject !== null ? (
              <div >
                  <a
                    href={projectList[activeProject].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-4xl font-medium font-tomo" >{projectList[activeProject].name}.</h3>
                  </a>
                <p>{projectList[activeProject].details}</p>
              </div>
            ) : (
              <p className="text-gray-600">Hover over a project to see details.</p> // Placeholder message
            )}
          </div>
        </div>
      </section>
      
      <footer className="sm:flex md:flex justify-start items-center h-50 text-white bg-slate-900 border-b-2 p-2 h-fit" >
          <div className='flex-1 flex justify-start md:text-9xl pl-8 flex-wrap '>
            <h3 className='font-mono pb-0 mb-0'>LET'S COLLOBRATE</h3>
            <p className='text-xl p-4 text-slate-300 mt-0 pt-0'>
              If you would to work on any project together or need any assistance I will be sure to help your out
            </p>
          </div>

          <div className='flex-1 flex-col'>
            <MyForm />
          </div>
      </footer>

      {/* <section className='flex h-screen justify-center items-center'>
        <div className='flex justify-center rounded-xl items-center h-[20%] w-[24%] border-2 shadow-custom-dark border-gray-900 hover:bg-slate-200'>
          <h3 className='text-2xl font-bold'>CARD</h3>
        </div>
      </section> */}
    </div>
  );
}

export default App;
