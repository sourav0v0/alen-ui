import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import './style.css';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology...', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Show me the news from CNN' },
  ];

const NewsCards = ({ articles, activeArticle }) =>{
    if(!articles.length){
        return(
            <div>
                {
                infoCards.map((infoCard) => (
                    <div class="cart-container">
                        <h5>{infoCard.title}</h5>
                        { 
                        infoCard.info ? 
                        (<h6><strong>{infoCard.title.split(' ')[2]};</strong><br />{infoCard.info}</h6>)
                        : null
                        }
                        <h6>Try Saying: <br /> <i>{infoCard.text}</i></h6>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            {
                articles.map((article, i) => (
                <div>
                    <NewsCard article={article} activeArticle={activeArticle} i={i} />
                </div>
                ))
            }
        </div>
    )
}

export default NewsCards;
