import React from 'react';

const Header = ({ setCategory, setId, setData, id }) => {
  const changeCategory = (category) => {
    console.log(category);
    setCategory(category);
    setId(1);
    setData('');
  };
  const headerCategorys = ["people", "planets", "starships"]
  return (
    <div className="header">
      {headerCategorys.map(hCategory => (
        <ul>
          <li key={id} onClick={() => changeCategory(hCategory)}>{hCategory}</li>
        </ul>
      ))}
    </div>
  );
};

export default Header;
