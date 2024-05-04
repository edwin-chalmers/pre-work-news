import { StyledLandingPage } from "./LandingPage.styled";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import { fakeNews } from "../../dummy-data"
import { fetchData } from "../../apiCalls";
import { useState, useEffect } from "react";
import userEvent from "@testing-library/user-event";

export default function LandingPage({ news }) {
    const [articles, setArticles] = useState([])
    const [inputValue, setInputValue] = useState('')

    function removeSpaces(str) {
        return str.replace(/\s/g, '')
    }

    // useEffect(() => {
    //     fetchData()
    //     .then(data => {
    //         console.log("🚀 ~ useEffect ~ data:", data)
    //         const articlePreviews = data.articles.map(article => {
    //             return <ArticlePreview key={removeSpaces(article.title)} article={article} removeSpaces={removeSpaces}/>
    //         });
    //         setArticles(articlePreviews)
    //     })
    // }, [])
    useEffect(() => {
        const articlePreviews = news.map(article => {
            return <ArticlePreview key={removeSpaces(article.title)} article={article} removeSpaces={removeSpaces}/>
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