import React from "react";
import { Categories, SortPopup } from "../components";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(item) => console.log(item)}
          items={["Meat", "Vegetarian", "Grill", "Spicy", "Calzone"]}
        />
        <SortPopup items={["popularity", "price", "alphabet"]} />
      </div>
      <h2 className="content__title">Pizzas</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
