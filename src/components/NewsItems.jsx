import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
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
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn  btn-sm btn-primary"
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
