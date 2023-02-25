import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: "in",
    PageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    PageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async newsUpdater() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=${this.state.peage}&pageSize=${this.props.PageSize}`;

    let fetchData = await fetch(url);
    let parsedData = await fetchData.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=1&pageSize=${this.props.PageSize}`;

    let fetchData = await fetch(url);
    let parsedData = await fetchData.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.newsUpdater();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.newsUpdater();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Today's Top Headline - On NewsNation</h1>

        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    newsSource={element.source.name}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.PageSize)
            }
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
