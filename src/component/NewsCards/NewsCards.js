// eslint-disable-next-line
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './style.css';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology...', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Show me the news from CNN' },
  ];

const NewsCards = ({ articles, activeArticle ,googleId}) =>{
    if(!articles.length){
        return(
            <div class="main-container">
                {
                infoCards.map((infoCard) => (
                <div class="cart-container">
                    <div class="cart-container-content">
                        <h5>{infoCard.title}</h5>
                        { infoCard.info ? (<h6><strong>{infoCard.title.split(' ')[2]}</strong><br />{infoCard.info}</h6>) : null}
                        <h6 class="help">Try Saying: <br /> <i>{infoCard.text}</i></h6>
                    </div>
                </div>
                ))}
            </div>
        )
    }

    return (

            <div class="main-container">
            {
                articles.map((article, i) => (
                
                    <NewsCard article={article} activeArticle={activeArticle} googleId={googleId} i={i} />
                
                ))
            }
            </div>
    )
}

export default NewsCards;
