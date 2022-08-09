import React from "react";

function Home({ productDetail }) {
  return (
    <>
      <div className="card-container" data-aos="zoom-in" data-aos-delay="500">
        <h3>
          {productDetail.title}
        </h3>
        <h4>
          Sub Category<span className="highlighter"> : </span> {productDetail.subcategory}
        </h4>
        <h3>Price: <span className="highlighter"> ${productDetail.price}</span></h3>
        <div className="skills">
          <h4>Popularity <span className="highlighter"> {productDetail.popularity} </span></h4>
        </div>
      </div>
    </>
  );
}

export default Home;
