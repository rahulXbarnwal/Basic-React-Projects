import React from 'react';

const List = (props) => {
  return (
    <>
      {props.people.map((curVal)=> {
        return (
          <article key = {curVal.id} className='person'>
            <img src={curVal.image} alt={curVal.name} />
            <div>
              <h4>{curVal.name}</h4>
              <p>{curVal.age}</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
