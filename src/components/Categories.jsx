import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? 'active' : ''}
        >
          All
        </li>
        {items &&
          map(items, (item, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={index}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = {
  activeCategory: null,
  items: []
};

export default Categories;
