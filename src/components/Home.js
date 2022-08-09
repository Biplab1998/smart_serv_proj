import React from "react";
import date from "../config/date";
// import aos from "aos";

function Home({ productDetail }) {
  return (
    <>
      <div className="card-container" data-aos="zoom-in" data-aos-delay="500">
        {/* <img className="round" src={productDetail.picture.large} alt="user" /> */}
        <h3>
          {productDetail.title}
        </h3>
        <h4>
          Sub Category : {productDetail.subcategory}
        </h4>
        {/* <h3>D.O.B::{date(productDetail.dob.date)}</h3> */}
        <h3>Price: ${productDetail.price}</h3>
        <div className="skills">
          {/* <h4>{productDetail.email}</h4> */}
          <h4>Popularity   {productDetail.popularity}</h4>
        </div>
      </div>
    </>
  );
}

export default Home;
