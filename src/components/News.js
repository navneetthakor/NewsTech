import React, { Component } from "react";
import NewsIteam from "./NewsIteam";

export default class News extends Component {
  state = {
    article: [],
    loading: true,
    page: 1,
    contry:'in'
  };

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.state.contry}&category=technology&apiKey=05911cada9804e94856bf33224a0d09a`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ article: parseData.articles, loading: false });
  }

  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=05911cada9804e94856bf33224a0d09a&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
      page: this.state.page - 1
    });
  };

  handlenext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=05911cada9804e94856bf33224a0d09a&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
      page: this.state.page + 1
    });
  };

  render() {
    return (
      <>
        <div className="container my-3 text-center">
          <h2>Leates Tech news for Geeks</h2>
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

          <div className="container d-flex justify-content-evenly">
            <button
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
