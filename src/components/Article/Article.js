import { StyledArticle } from "./Article.styled"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Article({ news, removeSpaces }) {
    const { articleId } = useParams()
    const [article, setArticle] = useState(null)

    useEffect(() => {
        const storedArticle = localStorage.getItem(articleId)
        if (storedArticle) {
            setArticle(JSON.parse(storedArticle))
        } else {
            const foundArticle = news.find(article => removeSpaces(article.title) === articleId)
            if (foundArticle) {
                localStorage.setItem(articleId, JSON.stringify(foundArticle))
                setArticle(foundArticle);
            }
        }
    }, [articleId, news, removeSpaces])

    if (!article) {
        return <div>Loading...</div>
    }

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
