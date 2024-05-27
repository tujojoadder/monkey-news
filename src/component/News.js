import React, { createContext, useCallback, useMemo, useRef } from "react";
import NewsItem from "./NewsItem";
import { useState } from "react";
import $, { Callbacks } from "jquery";
import { useEffect } from "react";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useReducer } from "react";
import BookContainer from "./reduxContainer/BookContainer";

export default function News(props) {
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalResult, settotalResult] = useState(0);
  const [scrollNum, setscrollNum] = useState();
  const [test, settest] = useState(0);
  const [users, setUsers] = useState([]);
  const data = useMemo(() => [11232, 32, 342, 4, 34, 34], []);
  const [count, setcount] = useState(0);
  //useRef
  const item1 = useRef();

  const a = { Roll: 19, name: "Hello" };
  const b = { ...a, name: "aj" };
  console.log("Hello" + b.name);
  // use of useMemo
  const lol = useMemo(() => {
    console.log("***");
  }, []);

  // use of Callback
  const ab = useCallback(() => {}, []);

  /* ///
const initialstate=0;
const reducer=(state,action) => {
  switch (action) {
    case "increment":
     return state+1
    default:
      return state
  }
}
const [count, dispatch] = useReducer(reducer,initialstate)
 */

  const clickhandel = () => {
    setcount((prev) => prev + 1);
    item1.current.style.backgroundColor = "red";
  };

  useEffect(() => {
    async function data() {
      try {
        if (page == 1) props.setprogress(20);
        setloading(true);

        let respons = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.api}&page=${page}&pagesize=${props.pagesize}&category=${props.category}`
        );

        if (page == 1) props.setprogress(55);

        setloading(false);
        let student = await respons.json();
        if (page == 1) props.setprogress(100);
        setscrollNum(Math.ceil(student.totalResults / 12));
        setUsers((prev) => [...prev, ...student.articles]);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, []);

  return (
    <>
      <div className="container " style={{ marginTop: "70px" }}>
        <BookContainer />
        <div className="row">
          {users &&
            users.map((user) => {
              return (
                <>
                  <NewsItem
                    ab={ab}
                    data={data}
                    key={user.content}
                    title={user.title}
                    description={user.description}
                    img={user.urlToImage}
                    url={user.url}
                    author={user.author}
                    date={user.publishedAt}
                    source={user.source.name}
                  />
                </>
              );
            })}
        </div>
      </div>
      <div className="text-center">{loading && <Spinner />} </div>
    </>
  );
}
