// eslint-disable-next-line
import React, { useState, useEffect} from 'react';
import { useQueryParam, StringParam  } from 'use-query-params';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from "../NewsCards/NewsCards"
import NavBar from '../NavBar/navBar';
import './App.css';
import './event.js';
import svg from './mail-142.svg';
import png from './newlog.png';
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
  var urlGetStarted = "http://localhost:3001/?page=getStarted&googleId="+googleId[0];
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
        googleId[0] === undefined ? (<NavBar islogin="false"  isDisable="false" />) : (<NavBar islogin="true"   isDisable="false" googleId={googleId}/>)
        }
        <div class="body">
          <div class="left">
              <h3 class="left-heading">
               Introduction
              </h3>
              <p class="left-text">
                To make life easier, advancements are being made in
                technology, and voice control is one of the leading 
                technologies which are gradually being implemented on more 
                and more devices. Voice control has become one of the most 
                in-demand skills. More and more applications and services 
                provide voice control capabilities. So, our website 
                provides a very easy and hands-free experience for the user and 
                enables him to use the service without having to physically 
                use the device with his/her hands.
              </p>
              {
              
              googleId[0] !== undefined ?
              <a href={urlGetStarted} class="button">Lets Start</a> :
              <a href="http://localhost:3001/?page=getStarted" class="button getStarted">Lets Start</a>
              }
          </div>
          <div class="right">
            <img src={png} alt="News image logo"></img>
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
      googleId[0] === undefined ? (<NavBar islogin="false"  isDisable="true" />) : (<NavBar islogin="true"  isDisable="false" googleId={googleId}/>)
      }
      <div className='contact-page'>
        <h1>Drop us a mail</h1>
        <a href="mailto:atulparte31@gmail.com">
        <img src={svg}  />
          atulparte31@gmail.com
        </a>
        <a href="mailto:souravprajapati31@gmail.com">
        <img src={svg} />
          souravprajapati31@gmail.com
        </a>
      </div>
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
        googleId[0] === undefined ? (<NavBar islogin="false" isDisable="true" />) : (<NavBar islogin="true" googleId={googleId}/>)
        }
        <NewsCards articles={newsArticles} activeArticle={activeArticle} googleId={googleId[0]}/>        
      </React.Fragment>
    );
  }
}


