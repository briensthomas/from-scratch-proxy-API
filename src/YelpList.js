import React from 'react';

export default function YelpList({ yelp }) {
  return (
    <div>
      {
        yelp.map((data, i) => 
          <div key={data + i + data.id}>
            <p>{data.name}</p>
          </div>)
      }
    </div>
  );
}
