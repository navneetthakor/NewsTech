import React, { Component } from "react";
import NewsIteam from "./NewsIteam";

export default class News extends Component {
    state = {
       article:[],
       loading:true
      };

      async componentDidMount()
      {
          let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=05911cada9804e94856bf33224a0d09a";
          let data = await fetch(url);
          // console.log(data);
          let parseData = await data.json();
          console.log(parseData)
          this.setState({article:parseData.articles, loading:false})

      }
    
 
  render() {

    return (
      <>
        <div className="container my-3 text-center">
          <h2 >Leates Tech news for Geeks</h2>
          <div className="row">
          {this.state.article.map((ele)=>{
           return <div className="col-md-4" key={ele.url}>
              <NewsIteam title={ele.title.slice(0,20)} disc ={ele.description.slice(0,80)} imgurl = {ele.urlToImage} url={ele.url} />
            </div>
          })
          }
          </div>

        </div>
      </>
    );
  }
}
