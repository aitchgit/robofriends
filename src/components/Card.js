import React from 'react';

const Card = ({ name, email, id, phone, website }) => {
  return (
      <div class="fl w-100 w-third-ns pa2">
      <div class="cf ph2-ns card-bg br4">
          <div class='fl w-30 pa2 '>
            <img src={`https://robohash.org/${id}?size=200x200`} class="br4 circle-bg" alt="robot profile pic" />
          </div>
          <div class='fl w-70 pa2'>
            <h1 class="f6 f5-ns fw6 lh-title mv0 card-heading-name">{name} </h1>
            <h2 class="f6 fw4 mt0 mb0 white-60">{email}</h2>
            <h2 class="f6 fw4 mt0 mb0 white-60">{phone}</h2>
            <h2 class="f6 fw4 mt0 mb0 white-60">{website}</h2>
          </div>
          </div>
        </div>      
             
  );
}

export default Card;