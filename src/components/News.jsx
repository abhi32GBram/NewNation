import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
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
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capital_first_letter(
      this.props.category
    )} | News-Nation`;
  }

  capital_first_letter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
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

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.newsUpdater();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.newsUpdater();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=${this.state.page}&pageSize=${this.props.PageSize}`;

    let fetchData = await fetch(url);
    let parsedData = await fetchData.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          Today's Top Headline - On{" "}
          {this.capital_first_letter(this.props.category)}
        </h1>

        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
                      key={element.url} // added key property here
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* THIS WONT BE NEED ANYMORE  */}
        {/* <div className="container d-flex justify-content-between">
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
        </div> */}
      </>
    );
  }
}

export default News;
