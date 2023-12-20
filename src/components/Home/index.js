import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />My name is Yashashree Deshpande.</h1>
                <h2>I am currently a Master's student at Seattle University.</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
}

export default Home;