import React, { Component } from "react";
import NewsIteam from "./NewsIteam";
import Lf from "./Lf";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    size: "12",
  };

  state = {
    article: [],
    loading: true,
    page: 1,
  };

  async componentDidMount() {
    const { country, size } = this.props;
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=05911cada9804e94856bf33224a0d09a&pageSize=${size}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults,
    });
  }


  handleprev = async () => {
    const { country, size } = this.props;
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=05911cada9804e94856bf33224a0d09a&page=${
      this.state.page - 1
    }&pageSize=${size}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
      page: this.state.page - 1,
    });
  };

  handlenext = async () => {
    if (this.state.page + 1 > this.state.totalResults / 21) {
    } else {
      const { country, size } = this.props;
      this.setState({
        loading: true,
      });
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=05911cada9804e94856bf33224a0d09a&page=${
        this.state.page + 1
      }&pageSize=${size}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article: parseData.articles,
        loading: false,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3 text-center">
          <h2>{this.props.country}</h2>
          {this.state.loading && <Lf />}
          {!this.state.loading && (
            <div className="row">
              {this.state.article.map((ele) => {
                return (
                  <div className="col-md-4" key={ele.url}>
                    <NewsIteam
                      title={ele.title}
                      disc={ele.description}
                      imgurl={ele.urlToImage}
                      url={ele.url}
                    />
                  </div>
                );
              })}
            </div>
          )}

          <div className="container d-flex justify-content-evenly my-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              class="btn btn-secondary"
              onClick={this.handleprev}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={this.handlenext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
