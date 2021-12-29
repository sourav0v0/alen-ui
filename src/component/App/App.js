// eslint-disable-next-line
import React, { useState, useEffect} from 'react';
import { useQueryParam, StringParam  } from 'use-query-params';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from "../NewsCards/NewsCards"
import NavBar from '../NavBar/navBar';
import './App.css'
import './event.js';
import History from '../Histroy/History';
const alankey = 'ee8a65b97399011adbd241011e1d0d032e956eca572e1d8b807a3e2338fdd0dc/stage';

export default function App(props) {
  const googleId = useQueryParam('googleId', StringParam);
  const page = useQueryParam('page',StringParam);
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ( {command, articles, number} ) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if(command === 'highlight'){
           setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if(command === 'open'){
            const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) :number;
            const article = articles[parsedNumber -  1];
            
            if(parsedNumber > 20){
              alanBtn().playText('Please try again')
            } else if(article) {
                window.open(article.url, '_blank');
                alanBtn().playText('Opening...');
            }
                    
        }
      }
    })
  },[]);
  return (
    <React.Fragment>
      {page[0] === "contactUs"?contactUs():(page[0] === "history"?history():page[0] === "getStarted" ? getStarted():home())}
    </React.Fragment>
  );

  function home(){
    return (
      <React.Fragment>
      <div class="blur-pannel" id="blur-pannel"> 
        {
        googleId[0] === undefined ? (<NavBar islogin="false"/>) : (<NavBar islogin="true" googleId={googleId}/>)
        }
        <NewsCards articles={newsArticles} activeArticle={activeArticle} googleId={googleId[0]}/> 
        <div class="body">
          <div class="left">
              <h3 class="left-heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <p class="left-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit 
              </p>
              <a href="http://localhost:3001/?page=getStarted" class="button">Lets Start</a> 
              <a href="#" class="button signUp" >Sign Up</a>  
          </div>
        </div>   
      </div>
      <div class="popup-login-hide" id="popup-login">
        <i class="far fa-times-circle" id="close-login"></i>
        <h1 class="login-head">Login</h1>
        <a class="btn btn-block google-btn" href="http://localhost:3000/auth/google" role="button" >
            <i class="fab fa-google">  Sign In with Google </i>
        </a> 
        <p class="login-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam ei
        </p>
      </div>  
      </React.Fragment>
    );
  }
  
  function contactUs(){
    return (<React.Fragment>
      {
      googleId[0] === undefined ? (<NavBar islogin="false"/>) : (<NavBar islogin="true" googleId={googleId}/>)
      }
      <h1>Drop us a mail</h1>
      <a href="mailto:atulparte31@gmail.com">atulparte31@gmail.com</a>
      <a href="mailto:souravprajapati31@gmail.com">souravprajapati31@gmail.com</a>
      </React.Fragment>);
  }
  function history(){
    return(
    <History googleId={googleId[0]} />
    );
  }
  function getStarted(){
    return (
      <React.Fragment>
        {
        googleId[0] === undefined ? (<NavBar islogin="false"/>) : (<NavBar islogin="true" googleId={googleId}/>)
        }
        <NewsCards articles={newsArticles} activeArticle={activeArticle} googleId={googleId[0]}/>        
      </React.Fragment>
    );
  }
}


