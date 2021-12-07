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
    function clickSend(name){
        if(googleId!=null || googleId != undefined){
            console.log(" In but not Login ");
        }
        else{
            axios({
            method: 'post',
            url: 'http://localhost:3000/postHistory',
            data: {
              googleId :googleId,
              source: name,
            }
            });
        }
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
                <Button size="small" color="primary" onClick={clickSend(source.name)} >Learn More</Button>
                <h6>{i + 1}</h6>
            </div>
        </div>
    )
}

export default NewsCard
