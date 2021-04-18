import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup } from '../components';
import PizzaBlock from '../components/PizzaBlock';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Calzone'];
const sortItems = [
  { name: 'popularity', type: 'popularity' },
  { name: 'price', type: 'price' },
  { name: 'alphabet', type: 'alphabet' }
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(index) => onSelectCategory(index)} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Pizzas</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
