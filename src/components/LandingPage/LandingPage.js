import { StyledLandingPage } from "./LandingPage.styled";

import ArticlePreview from "../ArticlePreview/ArticlePreview";

import { fakeNews } from "../../dummy-data"; 
import { useState, useEffect } from "react";

export default function LandingPage() {
    const [articles, setArticles] = useState([])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const articlePreviews = fakeNews.articles.map(article => {
            return <ArticlePreview key={article.url} article={article} />
        });

        setArticles(articlePreviews)
    }, [])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <StyledLandingPage>
            <nav>
                <h1>GOAWAY;TOUCHGRASS</h1>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="SEARCH..."
                />
            </nav>
            {articles}
        </StyledLandingPage>
    )

}