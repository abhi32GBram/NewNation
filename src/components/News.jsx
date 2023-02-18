import React, { Component } from "react";
import NewsItem from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=1&pageSize=20";
    let fetchData = await fetch(url);
    let parsedData = await fetchData.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=${
      this.state.page - 1
    }&pageSize=20`;
    let fetchData = await fetch(url);
    let parsedData = await fetchData.json();

    this.setState({
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      this.setState({ page: this.state.page + 1 });
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=${
        this.state.page + 1
      }&pageSize=20`;
      let fetchData = await fetch(url);
      let parsedData = await fetchData.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1>Today's Top Headline - On NewsNation</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
