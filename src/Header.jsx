import Icon from './Icon.jsx'
import Projects from './assets/041.png'
import Home from './assets/240.png'
import About from './assets/261.png'
import Work from './assets/191.png'
import Contact from './assets/335.png'

export default function Header({ onSelect }) {
    return (
        <div className="window active">
            <div className="title-bar">
                <div className="title-bar-text">Navbar</div>
                <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body has-space p-4 flex justify-between">
                <Icon onClick={() => onSelect('Home')} icon={Home} name="Home" />
                <Icon onClick={() => onSelect('Projects')}icon={Projects} name="Projects" />
                <Icon onClick={() => onSelect('Work Experience')}icon={Work} name="Work Experience" />
                <Icon onClick={() => onSelect('Contact')}icon={Contact} name="Contact" />
                <Icon onClick={() => onSelect('About this Site')}icon={About} name="About this Site" />
            </div>
        </div>
    )
}