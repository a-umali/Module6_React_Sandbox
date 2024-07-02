import React, { useEffect, useState } from 'react';
import { SingleCat } from './SingleCat';

const BigCats = () => {

  const cats = [
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo' },
  ];

  const [currentCats, setCurrentCats] = useState(cats);

  useEffect(() => {
    if (DataTransfer.length !== catsData.length) {
      setCatsData(data);
    }
  }, [data]);
  

  const catSorter = (type) => {
    let sortedCats = [...currentCats];

    if (type === 'ascend') {
      sortedCats.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (type === 'descend') {
      sortedCats.sort((a, b) => (a.name < b.name ? 1 : -1));
    }

    setCurrentCats(sortedCats);
  };

  const resetData = () => {
    setCurrentCats(cats);
  };

  const catListHandler = () => {
    return currentCats.map((cat) => <SingleCat key={cat.id} catsData={cat} />);
  };

  return (
    <div>
      <button onClick={() => catSorter('ascend')}>Sort Cats (ascend)</button>
      <button onClick={() => catSorter('descend')}>Sort Cats (descend)</button>
      <button onClick={resetData}>Reset</button>
      <ul>{catListHandler()}</ul>
    </div>
  );
};

export { BigCats };