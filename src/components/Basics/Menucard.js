import React from "react";

const Menucard = ({ menuData }) => {




  console.log(menuData);
  return (
    <section className="main-card--cointainer">
      {menuData.map((curElem) => {
        const {id,category,name, description, image} = curElem;
        return (
          <>
          <div className="card-container" key={id}>
          <div className="card ">
            <div className="card-body">
              <span className="card-number">{id}</span>
              <span className="card-author subtle">{category}</span>
              <h2 className="card-title"> {name} </h2>
              <span className="card-description">{description} </span>
              <div className="card-read">More</div>
              <img src={image} alt="images" className="card-media"/>
              <span className="card-tag sub-tle">Order Now</span>
            </div>
          </div>
        </div>
        </>
        );
      })}
    </section>
  );
};

export default Menucard;
