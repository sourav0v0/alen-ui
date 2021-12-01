import React, { useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
// import NewsCards from './Components/NewsCards/NewsCards';
import NewsCards from "../NewsCards/NewsCards"
import './App.css'
import wordsToNumbers from 'words-to-numbers';
// import newlog from './Images/goodnews.png';
import NavBar from '../NavBar/navBar';
import './event.js';
// import 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
const alankey = 'ee8a65b97399011adbd241011e1d0d032e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
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
    <div>
      <div class="blur-pannel" id="blur-pannel"> 
        <NavBar islogin="false"></NavBar>
         <NewsCards articles={newsArticles} activeArticle={activeArticle}/> 
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
              <a href="#" class="button">Lets Start</a> 
              <a href="#" class="button" id="signUp">Sign Up</a>  
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
    </div>
  );
}

export default App;
