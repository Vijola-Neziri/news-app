import React, { useState, useEffect } from "react";

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
      {mynews.map((ele) => {
        console.log(ele);
        return (
          <>
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default News;
