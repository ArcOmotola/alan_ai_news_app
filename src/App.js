import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = 'd59d94041d6988171e0249854279c8472e956eca572e1d8b807a3e2338fdd0dc/stage';

export default function App() {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, []);

    return (
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}
