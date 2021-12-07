import axios from 'axios'
import React from 'react'
import NavBar from '../NavBar/navBar'

export default function History(props) {
    var data;
    if(googleId!=null || googleId != undefined){
        console.log(" In but not Login ");
    }
    else{
        axios({
        method: 'get',
        url: 'http://localhost:3000/getHistory/?googleId'+this.props.googleId,
        }).then(res=>{
            data=res;
        });
    }
    console.log(data);
    return (
        <div>
            <NavBar islogin="true" /> 
            <div class="profile">
                <img src={this.props.googleId}></img>
                <h5>{this.props.name}</h5>
            </div>
            <div class="stats"> 

            </div>
        </div>
    )
}
