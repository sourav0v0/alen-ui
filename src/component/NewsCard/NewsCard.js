// eslint-disable-next-line
import React, { useState, useEffect, createRef} from 'react'
import {  Button } from '@material-ui/core';
import axios from 'axios'
import './style.css';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i,activeArticle,googleId}) => {
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
    
    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()))
    }, []);

    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);
    function clickSend(event){
        var element = event.target;
        var id = element.getAttribute('element-id');
        console.log(googleId+"  <--------------------- "+element.getAttribute('source'));
        if(googleId===null || googleId === undefined){
            console.log(" In but not Login ");
        }
        else{
            axios({
            method: 'post',
            url: 'http://localhost:3000/postHistory/?googleId='+googleId+'&source='+element.getAttribute('source'),
            data: 
                {
                googleId :googleId,
                source: element.getAttribute('source'),
                }
            });
        }
        
        document.getElementsByClassName('redirect-link')[id].click();
        
    }
    return (
        <div ref={elRefs[i]} class="cart-container">
            <div href={url} target="_blank">
                <img class="img" src={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png' } />
                <div>
                    <h2>{(new Date(publishedAt)).toDateString()}</h2>
                    <h2>{source.name}</h2>
                </div>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div>
                <a href={url} target="_blank" className="redirect-link">----</a>
                <button className="learnMore" onClick={clickSend} url={url} source={source.name} element-id={i}>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default NewsCard
