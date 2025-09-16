import React, { useState } from 'react'
import background from './assets/windows7bg.jpg'
import Header from './Header.jsx'
import Project from './Project.jsx'
import Experience from './Project copy.jsx'

function App() {
  const [section, setSection] = useState('Home')

  function renderContent() {
    switch (section) {
      case 'Home':
        return <div className="text-xl overflow-y-auto max-h-100 has-scrollbar">
          <img src="https://r73.cooltext.com/rendered/cooltext491439840554534.gif" about='Justus Mazeral' className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4 mt-4">Welcome to My Personal Website</h1>
          <p className="mb-2">Hello! I'm Justus, a CS and Finance student at UWaterloo. This is my personal website where you can learn more about me, my projects, work experience, and how to contact me.</p>
          <p className="mb-2">Feel free to explore the different sections using the navigation bar above.</p>
          <p className="mb-2">Thank you for visiting!</p>
        </div>
      case 'Projects':
        return <div className="text-xl overflow-y-auto max-h-100 has-scrollbar">
          <h1 className="text-2xl font-bold mb-4 mt-4">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Project title="TrendTrack Portfolio Generator" description="A program that generates a stock portfolio using statistical analysis and trend following techniques." link="https://github.com/jmazeral/trendtrack" />
            <Project title="StegoStudy" description="A full stack website that uses OpenAI Whisper to analyse speech and provide real-time feedback to users" link="https://github.com/jmazeral/stegostudy" />
            <Project title="NBA MVP Predictor" description="A program built with Jupyter Notebook that scrapes basketball stats and uses machine learning to predict MVPs." link="https://github.com/jmazeral/NBA-MVP-Predictor-" />
            <Project title="Personal Website" description="You are here!" link="#" />
          </div>
        </div>
      case 'Work Experience':
        return <div className="text-xl overflow-y-auto max-h-100 has-scrollbar">
          <h1 className="text-2xl font-bold mb-4 mt-4">Work Experience</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Experience title="Data Analyst Intern" company="CAA Club Group" time="May 2025 - Aug 2025" description="Automated data workflows, created dashboards to improve reporting, converted questionnaires into virtual templates, developed comparison models to be included in due diligence reports"/>
          </div>
        </div>
      case 'Contact':
        return <div className="text-xl overflow-y-auto max-h-100 has-scrollbar">
          <h1 className="text-2xl font-bold mb-4 mt-4">Contact Me</h1>
          <p className="mb-2">Feel free to reach out to me via email or connect with me on Linkedin or Github!</p>
          <ul className="list-disc list-inside">
            <li>Email: <a href="mailto:justusmazeral@gmail.com">justusmazeral@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/justusmazeral/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/justusmazeral</a></li>
            <li>Github: <a href="https://github.com/jmazeral" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">github.com/jmazeral</a></li></ul>
        </div>
      case 'About this Site':
        return <div className="text-xl overflow-y-auto max-h-100 has-scrollbar">
          <h1 className="text-2xl font-bold mb-4 mt-4">About This Site</h1>
          <p className="mb-2">Going into my second year of university, my personal website needed a SERIOUS makeover (just trust me, you'd say the same if you saw it), but I had no real ideas.</p>
          <p className="mb-2">As if a sign from god, I saw an Instagram Reel about the old internet and the Frutiger Aero design style, and it took me back to a better time.</p>
          <p className="mb-2">The first computer I ever used ran Windows 7 and that was what introduced me to the world of computing, so we can think of this website as a tribute to that old thing. </p>
          <p className="mb-2">With that out of the way, here is some technical stuff:</p>
          <p className="mb-2">This site is built with React and styled with TailwindCSS and the <a href="https://khang-nd.github.io/7.css/#window">7.css</a> library. The icons in the navbar are from <a href="https://frutiger-aero.org/"> frutiger-aero.org</a>.</p>
          <p className="mb-2">Thank you for visiting!</p>
        </div>
      default:
        return <div>Select a section.</div>
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}></div>
        <div className="max-w-5xl mx-auto p-4 my-4">
          <Header onSelect={setSection}/>
          <div className="window active my-4">
            <div className="title-bar">
                <div className="title-bar-text">Content</div>
                <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body has-space p-4">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
