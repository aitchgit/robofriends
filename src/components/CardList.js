import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  console.log('CardList');
  return (
    <div className='mw9 center ph3-ns cf ph2-ns'>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              phone={robots[i].phone}
              website={robots[i].website}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;