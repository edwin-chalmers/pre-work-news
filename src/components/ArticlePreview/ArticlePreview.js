import { StyledArticlePreview } from "./ArticlePreview.styled"
import { NavLink } from 'react-router-dom'

export default function ArticlePreview({ article, removeSpaces }) {

    return (
        <StyledArticlePreview>
            <img src={article.urlToImage}/>
            <h1>{article.title}</h1>
            <div className="desc">
                <p>{article.description}</p>
                <div className="time-readmore">
                    <p>{article.publishedAt}</p>
                    <NavLink id="link" to={`/${removeSpaces(article.title)}`}>
                        <button>READMORE...</button>
                    </NavLink>
                </div>
            </div>
        </StyledArticlePreview>
    )

} 