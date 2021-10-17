import React,{useState} from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    const mystyle={
        backgroundImage: "linear-gradient(to right,rgba(9,61,91,0.9),rgba(9,61,91,0.2))"
    }
    const dropdownstyle={
        backgroundColor:"#093d5b",      
    }
    const links={
       color:"white",
       textDecoration:"none",
       fontSize:"1.2rem",
       fontWeight:"bold" ,
       margin:"0 1rem"
    }
    const dropdown={
        color:"white",
        textDecoration:"none",
        fontSize:"1.2rem",
        fontWeight:"bold"
    }
    
    const [logo, setlogo] = useState("light")
    const handleLogo=()=>{
        if(logo==="light"){
            setlogo("dark")
        }
        else{
            setlogo("light")  
        }
        
    }
    const [more_icon, setmore_icon] = useState("fas fa-chevron-down")
    const handleMore=()=>{
        if(more_icon==="fas fa-chevron-down"){
            setmore_icon("fas fa-chevron-up")
        }
        else{
            setmore_icon("fas fa-chevron-down")
        }     
    }
    const [menu, setMenu] = useState("fas fa-bars")
    const [success,setdanger]=useState("dark")
    const handleMenu=()=>{
         if(menu==="fas fa-bars"){
             setMenu("fas fa-times")
             setdanger("danger")
         }
         else{
             setMenu("fas fa-bars")
             setdanger("dark")
         }
    }
    return(
        <>
    <nav className=" navbar navbar-expand-lg" style={mystyle}>
    <div className="container">
        <button className={`btn btn-${logo} rounded-circle nav_logo `} onMouseEnter={handleLogo}>
    <i className="fab fa-studiovinari fa-3x  animate__animated animate__fadeInLeft animate__slower	3s animate__infinite	infinite text-blue"></i></button>
    <button className={`navbar-toggler btn bg-${success}  text-light`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenu}>
    <i className={`${menu} fa-2x`}></i>    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mx-auto mb-lg-0">
      <li className="nav-item">
          <NavLink exact activeClassName=" active_link" to="/" style={links}><span><i className="fas fa-house-user"></i> Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName=" active_link" to="/about" style={links}><i className="fas fa-user-graduate"></i> About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName=" active_link" to="/education" style={links}><i className="fas fa-graduation-cap"></i> Education</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  activeClassName=" active_link" to="/skill" style={links}><i className="fas fa-pen-nib"></i> Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName=" active_link" to="/experience" style={links}><i className="fas fa-user-tie"></i> Experience</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active_link" to="/contact" style={links}><i className="fas fa-phone-alt"></i> Contact</NavLink>
        </li>
        <li className="nav-item dropdown ">
        <NavLink activeClassName=" dropdown-toggle" to="/more" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={links} onClick={handleMore}>
            More <i className={more_icon}></i>
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={dropdownstyle}>
            <li><NavLink exact activeClassName="dropdown-item active_link" to="/coverletter" style={dropdown}><i className="far fa-envelope"></i> Cover Letter</NavLink></li>
            <li><hr className="dropdown-divider "/></li>
            <li><NavLink exact activeClassName="dropdown-item active_link" to="/projects" style={dropdown}><i className="fas fa-trophy"></i> Projects</NavLink></li>
            <li><hr className="dropdown-divider "/></li>
            <li><NavLink exact activeClassName="dropdown-item active_link" to="/interest" style={dropdown}><i className="fas fa-code"></i> Interests</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            {/* <li><NavLink exact activeClassName="dropdown-item active_link" to="/language" style={dropdown}><i className="fas fa-language"></i> Languages</NavLink></li> */}
          </ul>
          </li>
      </ul>
    </div>
  </div>
</nav>
        
        
        </>
    );
};
export default Navbar;