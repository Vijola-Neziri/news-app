// News.js
import React, { useState, useEffect } from "react";
import "./News.css";

const News = ({ category }) => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cf2d11e1f5094c5ebae548ab893e2a54`
    );
    let data = await response.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      <div className="mainDiv">
        {mynews.map((ele) => (
          <div key={ele.url} className="card" style={{ width: "350px", height: "400px", marginLeft: "7.2rem", marginTop: "2rem" }}>
            <img src={ele.urlToImage == null ? "https://s.yimg.com/ny/api/res/1.2/hZ8.RkyP1aSba4_5afd16w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDI-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/95d13370-b49b-11ee-bdb7-e5c9230b9bba" : ele.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ele.author == "" ? "Cherlynn Low" : ele.author}</h5>
              <p className="card-text">{ele.title}</p>
              <a href={ele.url} target="_blank" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
