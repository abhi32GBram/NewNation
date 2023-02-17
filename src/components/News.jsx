import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Bao Fan: Billionaire tech banker in China reported missing - BBC",
      description:
        "Bao Fan's company China Renaissance says it has not been able to reach him in recent days.",
      url: "https://www.bbc.com/news/world-asia-64672095",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/5BB3/production/_128657432_gettyimages-1095740998.jpg",
      publishedAt: "2023-02-17T07:53:08Z",
      content:
        "One of China's most high-profile billionaire bankers has gone missing, his company has reported.\r\nBao Fan, the chief executive of China Renaissance Holdings, had not been able to be reached in recent… [+2988 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Josh Boak",
      title:
        "Doctor says Biden's 'vigorous' as he readies for 2024 run - The Associated Press - en Español",
      description:
        "WASHINGTON (AP) — Despite testing positive twice last year for the coronavirus, President Joe Biden  has no long-term symptoms and has been declared “healthy, vigorous” and “fit” to handle his White House responsibilities, according to a routine medical check…",
      url: "https://apnews.com/article/biden-politics-united-states-government-health-bdce6c15df6186e06710f2d903a3513e",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/340bf16703a541849e2ec49cb0591960/3000.webp",
      publishedAt: "2023-02-17T07:05:33Z",
      content:
        "WASHINGTON (AP) Despite testing positive twice last year for the coronavirus, President Joe Biden has no long-term symptoms and has been declared healthy, vigorous and fit to handle his White House r… [+2525 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Michael Sainato",
      title:
        "Tesla fires more than 30 workers after union drive announcement - The Guardian",
      description:
        "Workers at the Gigafactory 2 in Buffalo, New York, allege employees were fired in response to a union organizing drive",
      url: "https://www.theguardian.com/technology/2023/feb/17/tesla-fires-workers-union-buffalo",
      urlToImage:
        "https://i.guim.co.uk/img/media/2af01706aff2085be77c17ac89bbbf18a898c791/0_233_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b840d75703d0af4d9af5c7c7b9107fd6",
      publishedAt: "2023-02-17T07:02:00Z",
      content:
        "Tesla workers at the Gigafactory 2 in Buffalo, New York, allege over 30 workers were fired on 14 February in response to the announcement of a union organizing drive at the 1,000-worker facility.\r\nTh… [+2309 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Ken Martin",
      title:
        "Electrical outage at JFK Airport leaves passengers stranded - Fox Business",
      description:
        "An electrical problem caused by a fire at JFK Airport has shut Terminal 1 which affects incoming and outgoing international flights.",
      url: "https://www.foxbusiness.com/lifestyle/electrical-outage-jfk-airport-leaves-passengers-stranded",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/02/0/0/5c1958ca-JFK-exterior-A.png?ve=1&tl=1",
      publishedAt: "2023-02-17T06:56:43Z",
      content:
        "A power outage at New York's Kennedy Airport has caused chaos for travelers counting on international flights.\r\nTravel disruptions are expected to continue on Friday as Terminal 1 will remain closed,… [+1471 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Barry Svrluga",
      title:
        "Maryland's win over Purdue was how College Park mayhem should feel - The Washington Post",
      description:
        "It felt great to be in College Park on Thursday night, which is just what Maryland basketball fans have been waiting for.",
      url: "https://www.washingtonpost.com/sports/2023/02/16/maryland-basketball-court-storm-purdue/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/K3CP54B7CNH6VN2ARWICLCPNYQ.jpg&w=1440",
      publishedAt: "2023-02-17T06:17:00Z",
      content:
        "Comment on this story\r\nPick a moment, and hold on to it. Julian Reeses conversion underneath off a pretty little bounce pass from Don Carey, forcing a Purdue timeout. Patrick Emiliens dunk in transit… [+5868 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Yeo Boon Ping",
      title:
        "CNBC Daily Open: Markets fall on hot economy — and chance of 0.5% interest rate hikes - CNBC",
      description:
        "Economic data in January showed an unexpectedly strong U.S. economy. Markets fell, fearing a more hawkish Fed determined to strangle inflation.",
      url: "https://www.cnbc.com/2023/02/17/stock-markets-drop-on-chance-of-0point5percent-interest-rate-hikes.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107196221-1676613653518-gettyimages-1175991982-UK_POLICY.jpeg?v=1676614310&w=1920&h=1080",
      publishedAt: "2023-02-17T06:11:50Z",
      content:
        "This report is from today's CNBC Daily Open, our new, international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like wh… [+1980 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Kate Brumback",
      title:
        "Trump election probe grand jury believes some witnesses lied - The Associated Press - en Español",
      description:
        'ATLANTA (AP) — A special grand jury investigating efforts by then-President Donald Trump  and his allies to overturn his 2020 election loss in Georgia says it believes "one or more witnesses" committed perjury and urged local prosecutors to bring charges .',
      url: "https://apnews.com/article/trump-georgia-election-investigation-grand-jury-documents-40535dd2b4401e804af515229c6c2d68",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/329635677a204eac97c888e8dde327fb/3000.webp",
      publishedAt: "2023-02-17T05:39:40Z",
      content:
        "ATLANTA (AP) A special grand jury investigating efforts by then-President Donald Trump and his allies to overturn his 2020 election loss in Georgia says it believes one or more witnesses committed pe… [+5306 chars]",
    },
    {
      source: { id: null, name: "DW (English)" },
      author: "Deutsche Welle",
      title:
        "Actor Bruce Willis suffers from dementia, family says - DW (English)",
      description:
        "Hollywood star Bruce Willis is afflicted with frontoemporal dementia (known as FTD) and faces communication challenges, his family announced. He retired from acting last year.",
      url: "https://www.dw.com/en/actor-bruce-willis-suffers-from-dementia-family-says/a-64734629",
      urlToImage: "https://static.dw.com/image/61310312_6.jpg",
      publishedAt: "2023-02-17T04:07:45Z",
      content:
        "Actor Bruce Willis, 67, has been diagnosed with dementia, his family revealed on Thursday in a statement. \r\nWillis retired from acting last year after he was first diagnosed with aphasia. \r\nWhat do w… [+1375 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Gerrit De Vynck, Rachel Lerman, Nitasha Tiku",
      title:
        "Microsoft's new Bing A.I. chatbot, 'Sydney', is acting unhinged - The Washington Post",
      description:
        "Microsoft’s new AI chatbot is calling itself « Sydney » and acting unhinged. It learned from us.",
      url: "https://www.washingtonpost.com/technology/2023/02/16/microsoft-bing-ai-chatbot-sydney/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/X6VOIEJ6RJFGLNM4234OFDGD4Q.jpg&w=1440",
      publishedAt: "2023-02-17T03:58:18Z",
      content:
        "Comment on this story\r\nWhen Marvin von Hagen, a 23-year-old studying technology in Germany, asked Microsofts new AI-powered search chatbot if it knew anything about him, the answer was a lot more sur… [+8251 chars]",
    },
    {
      source: { id: null, name: "The Philadelphia Inquirer" },
      author: "EJ Smith",
      title:
        "Howie Roseman: Jalen Hurts’ extension is a priority, and the Eagles GM isn’t influenced by Carson Wentz’s contract - The Philadelphia Inquirer",
      description:
        "The Eagles are looking to secure Hurts' long-term future with the franchise after the quarterback turned himself into an MVP candidate this season.",
      url: "https://www.inquirer.com/eagles/jalen-hurts-contract-extension-eagles-howie-roseman-20230216.html",
      urlToImage:
        "https://www.inquirer.com/resizer/fmQ8CElLU40c8q_htpnXhZ0aBM8=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/TPVMJLMKABG6XFIWODOK7JTTLQ.jpg",
      publishedAt: "2023-02-17T03:23:46Z",
      content:
        "Throughout the last few days, Howie Roseman has heard a phrase repeated by Eagles players and coaches that has stuck in the back of his mind.\r\nWell be back.\r\nThe notion of winning the championship ne… [+4453 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Guardian staff reporter",
      title:
        "Tiger Woods finishes first round back with three birdies at Genesis Invitational - The Guardian",
      description:
        "Tiger Woods marked his return to competitive action with a closing trio of birdies as he carded 69 during the first round of the Genesis Invitational.",
      url: "https://www.theguardian.com/sport/2023/feb/17/tiger-woods-finishes-first-round-back-with-three-birdies-at-genesis-invitational",
      urlToImage:
        "https://i.guim.co.uk/img/media/bce9b70f016488556991dfb585f2ae96826dba3e/0_358_5370_3222/master/5370.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c0508abfd10570959668853c5022b7f9",
      publishedAt: "2023-02-17T03:12:00Z",
      content:
        "Tiger Woods marked his return to competitive action with a closing trio of birdies as he carded 69 during the first round of the Genesis Invitational.\r\nThe tournament host was five strokes back from … [+1969 chars]",
    },
  ];
  constructor() {
    super();
    console.log("bruh lmao construct or something idk ");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Today's Top Headline - On NewsNation</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title.slice(0, 35)}
                  description={element.description.slice(0, 75)}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
