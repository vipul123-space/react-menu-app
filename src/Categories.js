import React from "react";
import Menu from "./Menu";

function Categories({ categories, data }) {
  const [items, setItems] = React.useState(data);
  const filterItem = (itemCategory) => {
    console.log(itemCategory);
    if (itemCategory === "all") {
      setItems(data);
    } else {
      let newItems = data.filter((item) => {
        return item.category === itemCategory;
      });
      setItems(newItems);
    }
  };
  return (
    <>
      <div className="btn-container">
        {categories.map((item, index) => {
          return (
            <button
              onClick={() => filterItem(item)}
              key={index}
              className="btn"
            >
              {item}
            </button>
          );
        })}
      </div>
      <main className="main__section">
        {items.map((item) => {
          return <Menu key={item.id} {...item} />;
        })}
      </main>
    </>
  );
}

export default Categories;
