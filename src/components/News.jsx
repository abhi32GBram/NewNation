import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import LoadingBar from "react-top-loading-bar";

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
    this.props.setProgress(15);
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=${this.state.peage}&pageSize=${this.props.PageSize}`;

    let fetchData = await fetch(url);
    let parsedData = await fetchData.json();
    console.log(parsedData);
    this.props.setProgress(15);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
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
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "90px" }}
        >
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
      </>
    );
  }
}

export default News;

// --------------------------------------
// TRIED TO CONVERT THE CALSS BASED COMPONENT INTO FUNCTION COMPONENT

// DOSENT UPDATE THE NEXT SECTION OF NEWS FOR SOME REASON

// ERROR - Cannot read properties of undefined (reading 'name')

// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import NewsItem from "./NewsItems";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Spinner from "./Spinner";
// import LoadingBar from "react-top-loading-bar";

// const News = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   const capital_first_letter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const newsUpdater = async () => {
//     props.setProgress(15);
//     setLoading(true);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=${page}&pageSize=${props.PageSize}`;

//     let fetchData = await fetch(url);
//     let parsedData = await fetchData.json();
//     console.log(parsedData);
//     props.setProgress(15);
//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);
//     props.setProgress(100);
//   };

//   useEffect(() => {
//     document.title = `${capital_first_letter(props.category)} | NewsNation`;
//     newsUpdater();
//   }, []);

//   const fetchMoreData = async () => {
//     setLoading(true);
//     const url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${props.category}&apiKey=bd6bd730d02c4144b799b50b3dcc763a&page=${
//       page + 1
//     }&pageSize=${props.PageSize}`;
//     setPage(page + 1);
//     let fetchData = await fetch(url);
//     let parsedData = await fetchData.json();
//     console.log(parsedData);

//     setArticles([articles, parsedData.articles]);
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);
//   };

//   return (
//     <>
//       <h1
//         className="text-center"
//         style={{ margin: "35px 0px", marginTop: "90px" }}
//       >
//         Today's Top Headline - On {capital_first_letter(props.category)}
//       </h1>
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//       >
//         <div className="container">
//           <div className="row">
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title}
//                     description={element.description}
//                     imgUrl={element.urlToImage}
//                     newsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     newsSource={element.source.name}
//                     key={element.url}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </InfiniteScroll>
//     </>
//   );
// };

// News.defaultProps = {
//   country: "in",
//   PageSize: 8,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   PageSize: PropTypes.number,
//   category: PropTypes.string,
// };

// export default News;
