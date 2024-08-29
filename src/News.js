import React, { useState, useEffect } from "react";

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://127.0.0.1:5000/all");
      const data = await response.json();
      setData(data.news);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-group justify-content-center">
            {data.map((newsItem, index) => (
              <React.Fragment key={index}>
                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={newsItem.first_article_img_src}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {newsItem.first_article_title}
                      </h5>
                      <p className="card-text">{newsItem.first_article_desc}</p>
                      <a
                        href={newsItem.first_article_link}
                        className="btn btn-info w-100"
                        target="_blank"
                      >
                        뉴스 보기
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={newsItem.second_article_img_src}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {newsItem.second_article_title}
                      </h5>
                      <p className="card-text">
                        {newsItem.second_article_desc}
                      </p>
                      <a
                        href={newsItem.second_article_link}
                        className="btn btn-info w-100"
                        target="_blank"
                      >
                        뉴스 보기
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={newsItem.third_article_img_src}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {newsItem.third_article_title}
                      </h5>
                      <p className="card-text">{newsItem.third_article_desc}</p>
                      <a
                        href={newsItem.third_article_link}
                        className="btn btn-info w-100"
                        target="_blank"
                      >
                        뉴스 보기
                      </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
