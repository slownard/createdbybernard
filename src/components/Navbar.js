import { NavLink } from "react-router-dom"

function Navbar() {

    return (

        <div classname="navbar">

            <NavLink to="/about">About</NavLink>

            <NavLink to="/">Home</NavLink>

            <NavLink to="/projects">Projects</NavLink>

            <NavLink to="/jesus">Jesus</NavLink>


        </div>
    )
}

export default Navbar;