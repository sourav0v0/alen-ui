import React from 'react';
import './style.css'
function NavBar(props){
    console.log(props.islogin +" < -0")
    return <nav>
        <div class="nav-logo">
            <span>NEWSPAPER</span>
    
        </div>
        <div class="nav-links">
        {
            props.islogin === "false" ?(<div class="nav-items"><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</a></div>):(null)
        }
        <div class="nav-items">About Us</div>
        <div class="nav-items">Contact</div>
        </div>
    </nav>
    ;
}

export default NavBar;
