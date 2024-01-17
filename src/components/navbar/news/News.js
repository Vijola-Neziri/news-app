import React, { useState, useEffect } from "react";
import "./News.css"

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=db33c446eeda409595a29f5e36db65fc"
    );
    let data = await response.json();
    setMyNews(data.articles);
  };

  console.log(mynews);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele);
        return (
          <>
         
          <div class="card" style={{ width: "350px",height:"400px" ,marginLeft:"7.2rem",marginTop:"2rem"}}>
              <img src={ele.urlToImage == null ?"https://s.yimg.com/ny/api/res/1.2/hZ8.RkyP1aSba4_5afd16w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDI-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/95d13370-b49b-11ee-bdb7-e5c9230b9bba" : ele.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{ele.author == ""?"Cherlynn Low":ele.author}</h5>
                <p class="card-text">
                 {ele.title}
                </p>
                <a href={ele.url} target="_blank" class="btn btn-primary">
                 Read More
                </a>
              </div>
            </div>
          
          </>
        );
      })}
      </div>
    </>
  );
};

export default News;
