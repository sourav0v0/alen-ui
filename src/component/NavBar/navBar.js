// eslint-disable-next-line
import React from 'react';
import { useQueryParam, StringParam  } from 'use-query-params';
import './style.css'
function NavBar(props){
    const googleId = useQueryParam('googleId', StringParam);
    return <nav>
        <div class="nav-logo">
            <span>NEWSPAPER</span>
        </div>
        <div class="nav-links">
        {
            (props.islogin === "false" && props.isDisable === "false")?
            (<div class="nav-items signUp"><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</a></div>):
            (props.islogin === "false") ?
            (<div></div>):
            (
            <React.Fragment>
                <div class="nav-items"><a href="http://localhost:3001/"><i class="fa fa-sign-in" aria-hidden="true"></i>Logout</a></div>
                <div class="nav-items"><a href={"history.html/?googleId="+googleId[0]+"&page=history"}><i class="fa fa-sign-in" aria-hidden="true"></i>History</a></div>
            </React.Fragment>
            )
        }
        {
         (googleId[0] === null || googleId[0] === undefined) ?
            <div className="nav-items"><a href={"http://localhost:3001/?page=getStarted"}><i class="fa fa-sign-in" aria-hidden="true"></i>Get Started</a></div>:
            <div className="nav-items"><a href={"http://localhost:3001/?page=getStarted&googleId="+googleId[0]}><i class="fa fa-sign-in" aria-hidden="true"></i>Get Started</a></div>
        }
        {
            (googleId[0] === null || googleId[0] === undefined) ?
            <div className="nav-items"><a href={"http://localhost:3001/?page=contactUs"}><i class="fa fa-sign-in" aria-hidden="true"></i>Contact</a></div>:
            <div className="nav-items"><a href={"http://localhost:3001/?googleId="+googleId[0]+"&page=contactUs"}><i class="fa fa-sign-in" aria-hidden="true"></i>Contact</a></div>
        }
        {
         (googleId[0] === null || googleId[0] === undefined) ?
            <div className="nav-items"><a href={"http://localhost:3001/"}><i class="fa fa-sign-in" aria-hidden="true"></i>Home</a></div>:
            <div className="nav-items"><a href={"http://localhost:3001/?googleId="+googleId[0]}><i class="fa fa-sign-in" aria-hidden="true"></i>Home</a></div>
        }
        
        </div>
    </nav>
    ;
}

export default NavBar;
