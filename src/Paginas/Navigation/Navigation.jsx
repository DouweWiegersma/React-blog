import {NavLink} from "react-router-dom";
import './Navigation.css'
function Navigation(){
    return(
        <>
        <ul className='nav-bar'>
            <li> <NavLink to='/' className={({isActive}) => isActive ? 'active-link' : 'default-link'} > Home </NavLink></li>
            <li> <NavLink to='/posts' className={({isActive}) => isActive ? 'active-link' : 'default-link'}> Posts </NavLink></li>
            <li> <NavLink to='/newposts' className={({isActive}) => isActive ? 'active-link' : 'default-link'}> New Posts</NavLink></li>
            <li> <NavLink to='/errors' className={({isActive}) => isActive ? 'active-link' : 'default-link'}> Errors</NavLink></li>
        </ul>
        </>
    )
}
export default Navigation;