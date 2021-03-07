import React from 'react';

import { List, CategoryCotainer, CategoryImage, CategoryName, CategoryStatus, RedCicle, Info } from './styles'

import data from './data'

interface ItemProps {
  item: typeof data[0]
}

const CategoryList: React.FC = () => {

  const CategoryItem: React.FC <ItemProps>= ({ item }) => (
    <CategoryCotainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCicle />
        <Info>68.9K</Info>
      </CategoryStatus>
    </CategoryCotainer>
  );


  return (
    <List>
      {
        data.map((item) => (
          <CategoryItem  key={item.name} item={item} />
        ))
      }
    </List>
  );
};

export default CategoryList;
