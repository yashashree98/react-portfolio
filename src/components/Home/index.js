import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Animation from '../Animation'
import './index.scss'

const Home = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate')
    const nameArray = ['H', 'i', ' ', 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'Y', 'a', 's', 'h', 'a', 's', 'h', 'r', 'e', 'e', ' ', 'D', 'e', 's', 'h', 'p', 'a', 'n', 'd', 'e', '.']
    const jobArray = ['I', ' ', 'a', 'm', ' ', 'c', 'u', 'r', 'r', 'e', 'n', 't', 'l', 'y', ' ', 'a', ' ', 'M', 'a', 's', 't', 'e', 'r', 's', ' ', 's', 't', 'u', 'd', 'e', 'n', 't', ' ', 'a', 't', ' ', 'S', 'e', 'a', 't', 't', 'l', 'e', ' ', 'U', 'n', 'i', 'v', 'e', 'r', 's', 'i', 't', 'y', '.']

  return (
        <div className="container home-page">
            <div className="text-zone">
                <h1><Animation letterClass={letterClass}
                strArray={nameArray} 
                idx = {15}/></h1>
                <h2><Animation letterClass={letterClass}
                strArray={jobArray} 
                idx = {22}/></h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
  
}

export default Home