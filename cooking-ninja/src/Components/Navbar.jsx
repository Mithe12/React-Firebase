import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to='/' className='brand'>Cooking Ninja</Link>
                <Link to='/add'>New Recipe</Link>
            </nav>
        </div>
    );
}