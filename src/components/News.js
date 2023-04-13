import React, { Component } from "react";
import NewsIteam from "./NewsIteam";

export default class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Patrick Reilly",
    "title": "Biden makes cringeworthy gaffe in Ireland, mixes up ‘All Blacks’ rugby squad with ‘Black and Tan’ military force - New York Post ",
    "description": "While speaking about Irish former international rugby Rob Kearney — who is the president’s fifth cousin — Biden called him “a hell of a rugby player and he beat the hell out of the Black and Tans.”…",
    "url": "https://nypost.com/2023/04/13/biden-makes-major-gaffe-during-speech-in-ireland/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/Ireland_Biden_52598-77066.jpg?quality=75&strip=all&w=1024",
    "publishedAt": "2023-04-13T04:25:00Z",
    "content": "In yet another cringeworthy gaffe, President Biden on Wednesday accidentally made reference to British forces that persecuted Irish people instead of a New Zealand rugby team while delivering a speec… [+2643 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Eric Bradner",
    "title": "Kentucky Gov. Andy Beshear on Louisville bank gunman: 'This person murdered my friend' - CNN",
    "description": "Kentucky Gov. Andy Beshear said Wednesday he \"can't imagine\" what the family of the man who killed five people, including a friend of the governor, in Louisville on Monday is feeling.",
    "url": "https://www.cnn.com/2023/04/12/politics/andy-beshear-louisville-shooting-cnntv/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230412171443-beshear.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-04-13T02:57:00Z",
    "content": "Watch Kaitlan Collins full interview with Kentucky Gov. Andy Beshear tonight at 9 p.m. ET on CNN.\r\nKentucky Gov. Andy Beshear said Wednesday he cant imagine what the family of the man who killed five… [+5819 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hollywood Reporter"
    },
    "author": "Christy Piña",
    "title": "Jamie Foxx’s Daughter Says He’s on His “Way to Recovery” After Experiencing a Medical Complication - Hollywood Reporter",
    "description": "The Oscar winner has been shooting his upcoming Netflix film, 'Back in Action,' in Atlanta.",
    "url": "https://www.hollywoodreporter.com/news/general-news/jamie-foxx-experienced-medical-complication-in-recovery-1235373052/",
    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/04/Jamie-Foxx-Getty-H-2023.jpg?w=1024",
    "publishedAt": "2023-04-13T02:56:03Z",
    "content": "Jamie Foxx is recovering from a medical complication. \r\nAccording to Foxx’s daughter, Corinne Foxx, the actor “experienced a medical complication” but was “already on his way to recovery.” TheOscar w… [+1735 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Dianne Feinstein: Democrats call on Senator Dianne Feinstein to resign - BBC",
    "description": "Two colleagues say California's Dianne Feinstein is no longer fit to serve as she battles shingles.",
    "url": "https://www.bbc.com/news/world-us-canada-65259383",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10404/production/_129346566_gettyimages-1247167639.jpg",
    "publishedAt": "2023-04-13T02:49:18Z",
    "content": "The oldest member of the US Senate has asked to temporarily step aside from a key committee after two colleagues urged her to resign. \r\nCalifornia's Dianne Feinstein, 89, said her return to Washingto… [+1830 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Bradford Betz",
    "title": "Florida walloped by heavy rain, flooding as Fort Lauderdale cancels flights: ‘Life threatening situation’ - Fox News",
    "description": "A torrential downpour is walloping South Florida this week, flooding streets for countless drivers and causing the Fort Lauderdale-Hollywood International Airport to cancel flights.",
    "url": "https://www.foxnews.com/us/florida-walloped-heavy-rain-flooding-fort-lauderdale-cancels-flights-life-threatening-situation",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Flood.jpg",
    "publishedAt": "2023-04-13T01:49:00Z",
    "content": "Showers and thunderstorms brought a torrential downpour to Florida Wednesday, flooding streets and canceling some flights. \r\nThe National Weather Service said Wednesday evening that two to six inches… [+1126 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Elon Musk takes on media: Twitter CEO doesn't hold back in BBC interview - CNBC Television",
    "description": "Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money, culture and policy. Tune in Monday...",
    "url": "https://www.youtube.com/watch?v=d900-hdZ980",
    "urlToImage": "https://i.ytimg.com/vi/d900-hdZ980/maxresdefault.jpg",
    "publishedAt": "2023-04-13T01:45:50Z",
    "content": null
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Florencia Trucco, Karina Maciel, Karol Suarez",
    "title": "Mexico investigates migration chief over deadly fire in detention center - CNN",
    "description": "Mexican authorities are investigating the head of the country's immigration agency, in the wake of last month's deadly fire in a migrant detention center that killed at least 38 people and left dozens injured.",
    "url": "https://www.cnn.com/2023/04/12/americas/mexico-migrant-detention-fire-intl-latam/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328101605-mexican-migration-center-fire-032723.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-04-12T23:41:00Z",
    "content": "Mexican authorities are investigating the head of the countrys immigration agency, in the wake of last months deadly fire in a migrant detention center that killed at least 38 people and left dozens … [+3014 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Newser"
    },
    "author": "Bob Cronin",
    "title": "Study Suggests Familiar Antibiotic Can Counter STDs - Newser",
    "description": "Pill taken the morning after drastically reduced incidence of chlamydia, syphilis",
    "url": "https://www.newser.com/story/333863/study-suggests-familiar-antibiotic-can-counter-stds.html",
    "urlToImage": "https://img1-azrcdn.newser.com/image/1466910-12-20230412185542.jpeg",
    "publishedAt": "2023-04-12T23:30:00Z",
    "content": "US health officials released data Tuesday showing how chlamydia, gonorrhea, and syphilis cases have been accelerating, but doctors are hoping an old drug will help fight the sexually transmitted infe… [+2036 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Caroline Linton",
    "title": "Memphis commissioners reappoint ousted representative Justin Pearson to Tennessee House - CBS News",
    "description": "\"Nashville thought that they could silence democracy,\" Pearson said following the vote.",
    "url": "https://www.cbsnews.com/news/justin-pearson-tennessee-three-justin-jones-shelby-county-board-of-commissioners-meeting-today-2023-04-12/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/04/12/3f74ceea-cf41-444b-8a80-dc8c4793fbc8/thumbnail/1200x630/46364fc00e6b8c2a8c0d8da6e732e60b/2023-04-12t174022z-1256105981-rc25d0atx447-rtrmadp-3-tennessee-politics-house.jpg",
    "publishedAt": "2023-04-12T23:03:00Z",
    "content": "County officials in Memphis voted unanimously on Wednesday to reappoint Justin Pearson to the Tennessee House of Representatives, less than a week after the legislature voted to expel him and another… [+3280 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Sarah Rumpf-Whitten",
    "title": "Texas dairy explosion leaves at least 18,000 cattle dead, 1 person critically injured - Fox News",
    "description": "A dairy farm explosion injured one person and killed more than 18,000 cattle in Castro County, Texas, on Monday.",
    "url": "https://www.foxnews.com/us/texas-dairy-explosion-leaves-least-18000-cattle-dead-person-critically-injured",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/5e451799-4.jpg",
    "publishedAt": "2023-04-12T22:20:00Z",
    "content": "Approximately 18,000 cows were killed, and one person was critically injured, in an explosion at a dairy farm in the Texas Panhandle on Monday. \r\nThe Castro County Sheriffs Office confirmed with Fox … [+1458 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Americans get relief from rising food and gas prices, but core inflation remains high - PBS NewsHour",
    "description": "Inflation cooled last month to its lowest level in nearly two years. The price of groceries dropped three-tenths of a percent in March, marking the first dec...",
    "url": "https://www.youtube.com/watch?v=vQDZAYxvAKg",
    "urlToImage": "https://i.ytimg.com/vi/vQDZAYxvAKg/maxresdefault.jpg",
    "publishedAt": "2023-04-12T22:17:04Z",
    "content": null
    },
    {
    "source": {
    "id": "entertainment-weekly",
    "name": "Entertainment Weekly"
    },
    "author": "Jessica Wang",
    "title": "All the news from Warner Bros. Discovery's HBO Max update - Entertainment Weekly News",
    "description": "A new <em>Game of Thrones</em> prequel series, a <em>Harry Potter </em>TV show, a first look at <em>The Penguin,</em> and more.",
    "url": "https://ew.com/tv/warner-bros-discovery-hbo-max-streaming-service/",
    "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C0%2C2000%2C1000&poi=%5B20%2C66%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F04%2F12%2FMax-shows-041223.jpg",
    "publishedAt": "2023-04-12T22:14:00Z",
    "content": "Warner Bros. Discovery is officially dropping the HBO from HBO Max.\r\nThe media conglomerate announced Wednesday a rebrand to just Max, the destination to stream all HBO originals, Warner Bros. films,… [+4276 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Prince Harry to attend King Charles' coronation without Meghan - CBS News",
    "description": "Buckingham Palace has confirmed that Prince Harry will attend the coronation of his father, King Charles, but Harry's wife Meghan Markle will not be in atten...",
    "url": "https://www.youtube.com/watch?v=rC_7rLkyf6U",
    "urlToImage": "https://i.ytimg.com/vi/rC_7rLkyf6U/maxresdefault.jpg",
    "publishedAt": "2023-04-12T22:01:53Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Step inside NASA's 3D-printed Mars simulation habitat - The Sun",
    "description": "Step inside NASA's 3D-printed Mars simulation habitat.The Sun newspaper brings you the latest breaking news videos and explainers from the UK and around the ...",
    "url": "https://www.youtube.com/watch?v=XriI68nl_Tw",
    "urlToImage": "https://i.ytimg.com/vi/XriI68nl_Tw/maxresdefault.jpg",
    "publishedAt": "2023-04-12T22:00:27Z",
    "content": null
    }
    ]
  

    state = { article:this.articles};
    
 
  render() {

    return (
      <>
        <div className="container my-3 text-center">
          <h2 >KalTak news station</h2>
          <div className="row">
          {this.state.article.map((ele)=>{
           return <div className="col-md-4" key={ele.url}>
              <NewsIteam title={ele.title.slice(0,20)} disc ={ele.description.slice(0,80)} imgurl = {ele.urlToImage} />
            </div>
          })
            }
          </div>

        </div>
      </>
    );
  }
}
