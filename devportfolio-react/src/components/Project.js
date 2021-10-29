import React from 'react'

export default function Project() {
    function renderProjectCards() {
        const projectsArray = [
            {
                name: "Random Quote Generator",
                description: "Generates a new qoute everytime on clicking the button",
                image: "https://res.cloudinary.com/dpvxflhvr/image/upload/v1632236304/Screenshot_31_zqcvyq.png",
                skills: "HTML, CSS3 and Javascript",
                demoURL: "https://quote-generator-js-2021.netlify.app/",
                github: "https://github.com/neonworke/quote-generator-js"
            },
            {
                name: "Digital Clock",
                description: "Digital Clock built using Javascript with start and stop button",
                image: "https://res.cloudinary.com/dpvxflhvr/image/upload/v1628098136/Screenshot_2021-08-04_225812_ud4ttf.png",
                skills: "HTML, CSS3 and Javascript",
                demoURL: "https://digital-clock-21.netlify.app/",
                github: "https://github.com/neonworke/digital-clock"
            },
            {
                name: "Identity Card Generator",
                description: "Generates ID Card after filling up the required details",
                image: "https://res.cloudinary.com/dpvxflhvr/image/upload/v1628028526/Screenshot_2021-08-04_033759_uedobr.png",
                skills: "HTML, TailwindCSS and Javascript",
                demoURL: "https://id-card-generator-21.netlify.app",
                github: "https://github.com/neonworke/id-card-generator-2021"
            },
            {
                name: "Shopping Cart",
                description: "Shopping Cart Website built using React.js",
                image: "https://res.cloudinary.com/dpvxflhvr/image/upload/v1635437121/Screenshot_34_r1hoda.png",
                skills: "React.js and TailwindCSS",
                demoURL: "https://shopping-cart-react-21.netlify.app",
                github: "https://github.com/neonworke/shopping-cart-react-21"
            },
            {
                name: "BMI Calculator",
                description: "Web application developed on React.js to calculate BMI on an individual",
                image: "https://res.cloudinary.com/dpvxflhvr/image/upload/v1632250981/Screenshot_33_u1lrwj.png",
                skills: "React.js and TailwindCSS",
                demoURL: "https://bmicalculator-react-21.netlify.app/",
                github: "https://github.com/neonworke/bmicalculator-react-2021/tree/main/bmi-calculator-react"
            },
            {
                name: "Grocery Listing App",
                description: "Grocery Listing application built on MERN stack with add and delete functions",
                image: "https://res.cloudinary.com/dpvxflhvr/image/upload/v1635437702/Screenshot_37_xlawed.png",
                skills: "React.js, TailwindCSS, Node.js",
                demoURL: "https://grocery-listing-fullstack.netlify.app",
                github: "https://github.com/neonworke/grocery-item-listing"
            },
        ];
        return projectsArray.map((projectItem) => {
            return (
                <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" key={projectItem.name}>
                    <div className="relative">
                        <img className="w-full rounded-xl" src={projectItem.image} alt="Colors" />
                    </div>
                    <h2 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{projectItem.name}</h2>
                    <div className="my-4">
                        <div className="flex space-x-1 items-center">
                            <p>{projectItem.description}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </span>
                            <p>{projectItem.skills}</p>
                        </div>
                        <div>
                            <div className="flex">
                        <a href={projectItem.demoURL} rel="noreferrer noopener" target="_blank" className="w-1/2 mr-2">
                        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Demo</button>
                        </a>
                        <a href={projectItem.github} rel="noreferrer noopener" target="_blank" className="w-1/2">        
                        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Github</button>
                        </a>
                        </div>
                        </div>
                    </div>
                </div>
            )
        });
    }
    return (
        <div className="mt-16" id="projects">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Projects</span>
            </h2>
            <div className="w-full mt-10 justify-items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                {renderProjectCards()}
            </div>
        </div>
    )
}
