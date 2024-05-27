import React from 'react'
import CricketItem from './CricketItem'
import { useState } from 'react'
import $ from 'jquery'
export default function Cricket() {
  
//write a code two number of sun in javascript?

let newses= [
  {
   "source": {
   "id": null,
   "name": "Rolling Stone"
   },
   "author": "Brian Hiatt",
   "title": "Ed Sheeran Confesses: Tears, Trauma, and Those Bad Habits - Rolling Stone",
   "description": "When he became a dad, his ‘party boy’ days ended. Then tragedy struck, forcing him to face his hidden dark side — and hit his hottest creative streak.",
   "url": "https://www.rollingstone.com/music/music-features/ed-sheeran-new-album-subtract-tour-cover-story-interview-1234694319/",
   "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/03/230117_Black_Tee_0005-1.jpg?crop=0px%2C0px%2C1629px%2C917px&resize=1600%2C900",
   "publishedAt": "2023-03-21T12:00:00Z",
   "content": "In case there’s any doubt, Ed Sheeran is well aware of the fact that he’s … Ed Sheeran. \r\n“I’m not an idiot,” he says, early in our acquaintance. “When you say in your office, ‘I’m gonna go and inter… [+35638 chars]"
   },
  {
   "source": {
   "id": "cnn",
   "name": "CNN"
   },
   "author": "Raja Razek, Elizabeth Wolfe",
   "title": "Colorado dentist accused of poisoning his wife had ordered arsenic and searched for 'how to make poison,' affidavit says - CNN",
   "description": "A Colorado dentist is accused of fatally poisoning his wife by putting arsenic in her protein shakes after ordering it online and making a number of suspicious internet searches in the weeks leading up to her death, including \"how to make poison,\" according t…",
   "url": "https://www.cnn.com/2023/03/21/us/colorado-dentist-wife-poisoning-internet-searches/index.html",
   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230320121203-james-toliver-craig-mug-shot.jpg?c=16x9&q=w_800,c_fill",
   "publishedAt": "2023-03-21T11:52:00Z",
   "content": "A Colorado dentist is accused of fatally poisoning his wife by putting arsenic in her protein shakes after ordering it online and making a number of suspicious internet searches in the weeks leading … [+4109 chars]"
   },
  {
   "source": {
   "id": "cnn",
   "name": "CNN"
   },
   "author": "Ben Morse",
   "title": "Indiana becomes second No. 1 seed to be knocked out of March Madness in successive days - CNN",
   "description": "First, it was the Stanford Cardinals -- then, it was the Indiana Hoosiers.",
   "url": "https://www.cnn.com/2023/03/21/sport/miami-indiana-march-madness-womens-sweet-16-spt-intl/index.html",
   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230321101531-01-destiny-harden-miami-032023.jpg?c=16x9&q=w_800,c_fill",
   "publishedAt": "2023-03-21T11:25:00Z",
   "content": "First, it was the Stanford Cardinals then, it was the Indiana Hoosiers. \r\nMarch Madness is certainly living up to its name as Indiana became the second No. 1 seed to be knocked out of the womens NCAA… [+2009 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "CNBC"
   },
   "author": "Jeff Cox",
   "title": "Treasury Secretary Yellen says the government could backstop more deposits if necessary to stop contagion - CNBC",
   "description": "The former Fed chair said authorities believe they have taken appropriate actions to stem liquidity problems, but will do more if needed.",
   "url": "https://www.cnbc.com/2023/03/21/treasury-secretary-yellen-says-the-government-could-backstop-more-deposits-if-necessary.html",
   "urlToImage": "https://image.cnbcfm.com/api/v1/image/107209980-1678979808548-gettyimages-1248377832-AFP_33BG2NH.jpeg?v=1679398827&w=1920&h=1080",
   "publishedAt": "2023-03-21T11:24:17Z",
   "content": "Treasury Secretary Janet Yellen said Tuesday the government is ready to provide further guarantees of deposits if the banking crisis worsens.\r\nIn remarks prepared for a speech to the American Bankers… [+3431 chars]"
   },
  {
   "source": {
   "id": "financial-times",
   "name": "Financial Times"
   },
   "author": "Max Seddon, Polina Ivanova",
   "title": "Xi Jinping invites Vladimir Putin on state visit to China - Financial Times",
   "description": "Chinese leader shows support for his Russian counterpart on first trip to Moscow since its invasion of Ukraine",
   "url": "https://www.ft.com/content/ae0bb3f6-4cc3-49ca-a0e6-93a8e7cc62cc",
   "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Feaa7094b-3057-44e2-b11f-cae7bdffcc38.jpg?source=next-opengraph&fit=scale-down&width=900",
   "publishedAt": "2023-03-21T10:58:34Z",
   "content": "Xi Jinping has invited Vladimir Putin to visit China this year, a big gesture of support after the International Criminal Court issued an arrest warrant accusing the Russian president of war crimes l… [+3274 chars]"
   },
  {
   "source": {
   "id": "the-hill",
   "name": "The Hill"
   },
   "author": "Syeda Abbas, Jeremy Tanner",
   "title": "Cases of rare tick-borne disease on the rise in 8 states, CDC says - The Hill",
   "description": "Tick-borne illness cases in the United States are up 25% since 2011, according to the Centers for Disease Control and Prevention. Among the cases is a rare disease, babesiosis, which is found mainly in the Northeast and Midwest.",
   "url": "https://thehill.com/homenews/3909556-cases-of-rare-tick-borne-disease-on-the-rise-in-8-states-cdc-says/",
   "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/03/Lyme_Disease_New_England_10662_54744508_ver1.0-e1679393151879.jpg?w=1280",
   "publishedAt": "2023-03-21T10:49:27Z",
   "content": "Skip to content\r\nNEW HAVEN, Conn. (WTNH) – Tick-borne illness cases in the United States are up 25% since 2011, according to a new report from the Centers for Disease Control and Prevention, includin… [+2725 chars]"
   },
  {
   "source": {
   "id": "usa-today",
   "name": "USA Today"
   },
   "author": "Steve Gardner",
   "title": "WBC schedule championship USA vs. Japan: Streaming, how to watch - USA TODAY",
   "description": "Team USA goes for a second consecutive World Baseball Classic championship tonight, taking on two-time winner Japan and starting pitcher Yu Darvish.",
   "url": "https://www.usatoday.com/story/sports/mlb/2023/03/21/world-baseball-classic-schedule-championship-usa-vs-japan/11508342002/",
   "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/20/USAT/8d7c8290-04fc-40cc-baa3-8f0211bd5cc0-USP_Baseball__World_Baseball_Classic_-_Semifinal_1.jpg?crop=3676,2068,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
   "publishedAt": "2023-03-21T10:31:44Z",
   "content": "The 2023 World Baseball Classic comes to a close with one last game, pitting the defending champion Team USA vs. two-time winner Japan for the title.\r\nDespite a couple high-profile injuries, it's bee… [+2679 chars]"
   },
  {
   "source": {
   "id": null,
   "name": "CNBC"
   },
   "author": "Holly Ellyatt",
   "title": "Ukraine war live updates: Xi invites Putin to China as talks in Moscow continue; Russian mercenaries say Kyiv is preparing counterattack - CNBC",
   "description": "It's the second day of Chinese President Xi Jinping's state visit to Moscow Tuesday. He and President Putin could sign a number of bilateral agreements today.",
   "url": "https://www.cnbc.com/2023/03/21/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
   "urlToImage": "https://image.cnbcfm.com/api/v1/image/105446461-1536763708632rts211io.jpg?v=1679393180&w=1920&h=1080",
   "publishedAt": "2023-03-21T10:06:00Z",
   "content": "Chinese President Xi Jinping said Tuesday that he's invited his Russian counterpart Vladimir Putin to visit China this year, Russian news agencies reported Tuesday.\r\n\"I yesterday invited President Pu… [+888 chars]"
   }

   ];
let [news, setnews] = useState(newses);
/* 
// create a promise

let big=(num) => {
  console.log("please waite")
  return new Promise((resolve,reject)=>{

    setTimeout(()=>{
      $.get("https://jsonplaceholder.typicode.com/posts",data=>{
        resolve(data);
      }).fail(()=>{
        reject("Some error")
      })
    },3000);

  })
}
big(4).then((result)=>{console.log(result)}).catch((result)=>{console.log(result)});
 */

/* let ab=async()=>{
console.log(1);
await console.log(2);
console.log(3);


}
 ab();
 console.log(4);
 console.log(5);
 */

/* let n=100;
 for(let i=2;i<=n;i++){
let count=0;
  for (let j = 2; j < i; j++) {
    if (i%j==0) {
      count++;
   
    }  
  
  }
  if(count==0){
    console.log(i+"   "+count);
  }
 } */

 // Create Array Destruting
/* class employee{
constructor(name,age){
  this.name=name;
  this.age=age;
console.log("Employee constructor");
}
display(){
  console.log(`My name is ${this.name} My age is ${this.age}`)
}
}
// class of manager
class manager extends employee{

 info(){
  console.log(this.name)
 }
}



let item1=new manager("Yahoo",21);
item1.info(); */
//Make a Promise

let getdata=()=>{
return new Promise((reject,resolve)=>{
      setTimeout(()=>{
      $.get("https://jsonplaceholder.typicode.com/posts",data=>{
        
      data.map(ele=>{
        console.log(ele.id);
      })


        resolve("data loading done");
      }).fail(err=>{
        console.log("data not loading");
        reject();
      })

      },2000)

 })}

getdata();

  return (
<>

<div className="container">
  <div className="row">

  {news.map((ele)=>{

return  <CricketItem key={ele.url} title={ele.title} img={ele.urlToImage} discription={ele.description} newsurl={ele.url}/>


})}


  </div>
</div>
</>

    )
}
