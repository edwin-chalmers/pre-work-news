import { StyledLandingPage } from "./LandingPage.styled"
import ArticlePreview from "../ArticlePreview/ArticlePreview"
import { useState, useEffect } from "react"

export default function LandingPage({ news }) {
    const [articles, setArticles] = useState([])
    const [inputValue, setInputValue] = useState('')

    function removeSpaces(str) {
        return str.replace(/\s/g, '')
    }

    useEffect(() => {
        const filteredArticles = news.filter(article =>
            removeSpaces(article.title.toLowerCase()).includes(removeSpaces(inputValue.toLowerCase()))
        )

        const articlePreviews = filteredArticles.map(article => (
            <ArticlePreview key={removeSpaces(article.title)} article={article} removeSpaces={removeSpaces}/>
        ))

        setArticles(articlePreviews);
    }, [news, inputValue])

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
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
