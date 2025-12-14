import { Component } from "react";
import axios from "axios";
import { ArticlesContainer, ItemContainer, ArticleTitle } from "./ArticleList.styled.jsx";

const url = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

export default class ArticleList extends Component {
 state = {
    articles: []
 };

    async componentDidMount() {
        const response =  await axios.get(url).catch((error) => {
            console.log("Error: ", error);
        });
        this.setState({ articles: response.data.hits.map(article => (
            <ItemContainer key={article.objectID}>
                <ArticleTitle href={article.url}>{article.title}</ArticleTitle>
                <p>Author: {article.author}</p>
                <p>Points: {article.points}</p>
                <p>Comments: {article.num_comments}</p>
            </ItemContainer>
            ))})
    }

    render() {
        return (
            <ArticlesContainer>
                {this.state.articles}
            </ArticlesContainer>
        ) 
}
}

