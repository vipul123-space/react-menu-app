import React from "react";
function Menu({ title, price, img, desc }) {
  return (
    <>
      <section className="catagories">
        <div className="img__box">
          <img src={img} alt="" />
        </div>
        <div>
          <div className="catagories__title__price">
            <p className="catagory__name">{title}</p>
            <p className="price">${price}</p>
          </div>
          <p className="info">{desc}</p>
        </div>
      </section>
    </>
  );
}

export default Menu;
