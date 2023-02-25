import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, newsSource } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          {/* style={{ width: "16e rem" }} */}
          <img
            src={
              !imgUrl
                ? "http://cdn.wionews.com/sites/default/files/2023/02/17/333056-untitled-design-2023-02-17t151731065.png"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span
              className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: 1 }}
            >
              {newsSource}
            </span>
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                Article by : {!author ? "Anonymous" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn  btn-sm btn-info"
            >
              Continue Reading
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
