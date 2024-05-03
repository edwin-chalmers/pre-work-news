import { StyledArticle } from "./Article.styled";
import { Link } from 'react-router-dom'

import { fakeNews } from "../../dummy-data"; 

// A “detailed” view for each article (headline, image, date, content, source) 

export default function Article() {

    const article = fakeNews.articles[0]

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