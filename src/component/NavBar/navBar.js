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
            props.islogin === "false" ?(<div class="nav-items signUp"><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</a></div>):
            (
            <React.Fragment>
                <div class="nav-items"><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Logout</a></div>
                <div class="nav-items"><a href={"history.html/?id="+googleId[0]+"&page=history"}><i class="fa fa-sign-in" aria-hidden="true"></i>History</a></div>
            </React.Fragment>
            )
        }
        <div class="nav-items">Contact</div>
        </div>
    </nav>
    ;
}

export default NavBar;
