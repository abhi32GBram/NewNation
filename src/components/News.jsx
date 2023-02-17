import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=bd6bd730d02c4144b799b50b3dcc763a";
    let fetchData = await fetch(url);
    let parsedData = await fetchData.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Today's Top Headline - On NewsNation</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
