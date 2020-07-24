import React, { useState } from 'react';

const Categories = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='categories'>
      <ul>
        <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>
          All
        </li>
        {items.map((item, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
