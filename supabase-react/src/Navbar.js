import { NavLink } from "react-router-dom";
import { supabase } from './supabaseClient'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="./Home" className="navlogo"><h1>Howl</h1></NavLink>
            <div className="links">
                <NavLink to="./Dasboard" className="navlink">Home</NavLink>
                <NavLink to="./Explore" className="navlink">Explore</NavLink>
                <NavLink to="./Messages" className="navlink">Messages</NavLink>
                <NavLink to="./Profile" className="navlink">Profile</NavLink>
            </div>
            <div>
                <button className="button block" onClick={() => supabase.auth.signOut()}>
                    Sign Out
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;