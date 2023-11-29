import { NavLink } from 'react-router-dom'
import './HeaderNav.css'

const HeaderNav = ({ title }) => {
    return (
        <nav id='navbar'>
            <div className='navdiv titlediv'>
                <h1>{title}</h1>
            </div>
            <div className='navdiv btndiv'>
                <button className='home-btn'>
                    <NavLink to="/">Home</NavLink>
                </button>
                <button className='bootcamp-btn'>
                    <NavLink to="/bootcamp">Bootcamp</NavLink>
                </button>
                <button className='battle-btn'>
                    <NavLink to="/battle">Battle</NavLink>
                </button>
            </div>
        </nav>
    )
}

export default HeaderNav