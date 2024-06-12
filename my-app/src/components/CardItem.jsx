import React from 'react';
import Item from './Item';


const CardItem = (props) => {
  return (
    <div>
      <div>
        <h2>Продукты</h2>
      </div>
      <div>
        {props.item.map(obj => (
            <Item 
              id={obj.id}
              myId={obj.myId}
              name={obj.name}
              description={obj.description}
              price={obj.price}
              url={obj.url}
            />
        ))}
      </div>
    </div>
  );
}

export default CardItem;
