import React from 'react';
import { useEffect, useState } from 'react';
import { fetchBusinesses } from './services/fetch-utils';
import YelpList from './YelpList';

export default function YelpSearch() {
  const [yelp, setYelp] = useState([]);
  const [searchBusinesses, setSearchBusinesses] = useState('97222');

  async function onLoad() {
    const data = await fetchBusinesses(searchBusinesses);

    setYelp(data.businesses);
  }

  useEffect(() => {

    onLoad();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleYelpSubmit(e) {
    e.preventDefault();

    await onLoad();
    setSearchBusinesses('');
  }

  return (
    <div>Yelp Search
      <form onSubmit={handleYelpSubmit}>
        <input value={searchBusinesses}
          onChange={(e) => setSearchBusinesses(e.target.value)} />
        <button>Search Businesses</button>
      </form>
      <YelpList yelp={yelp}/>
    </div>
  );
}
