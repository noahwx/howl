import './index.css'

export default function Navbar() {
    return <div className="navbar">
        <a href="/" className="nav-title">Dashboard</a>
        <div className="navlinks">
            <a href="./Account" className="navlink">Account</a>
            <a href="./Messages" className="navlink">Messages</a>
        </div>
    </div>
}