import React from "react";
import Title from "./Title";
import Categories from "./Categories";
import data from "./data";
const categories = [
  "all",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];
function App() {
  return (
    <>
      <Title />
      <Categories categories={categories} data={data} />
    </>
  );
}

export default App;
