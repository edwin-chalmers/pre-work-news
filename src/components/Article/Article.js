import { StyledArticle } from "./Article.styled"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

// source?

export default function Article({ news, removeSpaces }) {
    const { articleId } = useParams()
    const article = news.find(article => removeSpaces(article.title) === articleId)

    return (
        <StyledArticle >
            <div className="nav-img">
                <nav>
                    <Link id="backToHome" to="/">
                        <h2>GA;TG</h2>
                    </Link>
                </nav>
                <img src={article.urlToImage}/>
            </div>
                <div className="text-field">
                    <h1>{article.title}</h1>
                    <p>{article.publishedAt}</p>
                    <article>{article.content}</article>
                </div>
        </StyledArticle>
    )

}