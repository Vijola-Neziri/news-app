import React, { useState, useEffect } from "react";
import "./News.css";

const News = () => {
  const [mynews, setMyNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=db33c446eeda409595a29f5e36db65fc&q=${searchTerm}`
    );
    let data = await response.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search by keyword..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="mainDiv">
        {mynews.map((ele) => {
          return (
            <div
              className="card"
              style={{
                width: "350px",
                height: "400px",
                marginLeft: "7.2rem",
                marginTop: "2rem",
              }}
              key={ele.url}
            >
              <img
                src={
                  ele.urlToImage == null
                    ? "https://s.yimg.com/ny/api/res/1.2/hZ8.RkyP1aSba4_5afd16w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDI-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/95d13370-b49b-11ee-bdb7-e5c9230b9bba"
                    : ele.urlToImage
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {ele.author === "" ? "Cherlynn Low" : ele.author}
                </h5>
                <p className="card-text">{ele.title}</p>
                <a href={ele.url} target="_blank" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
