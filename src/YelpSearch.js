import React from 'react';
import { useEffect, useState } from 'react';
import { fetchBusinesses } from './services/fetch-utils';
import YelpList from './YelpList';
import YelpSpinner from './YelpSpinner';

export default function YelpSearch() {
  const [yelp, setYelp] = useState([]);
  const [searchBusinesses, setSearchBusinesses] = useState('97222');
  const [loading, setLoading] = useState(false);

  async function onLoad() {
    setLoading(true);
    const data = await fetchBusinesses(searchBusinesses);
    setLoading(false);

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
    <div className='yelp-list'>Yelp Search
      <form onSubmit={handleYelpSubmit}>
        <input value={searchBusinesses}
          onChange={(e) => setSearchBusinesses(e.target.value)} />
        <button>Search Businesses</button>
      </form>
      {
        loading
          ? <YelpSpinner />
          : <YelpList yelp={yelp}/>
      }
    </div>
  );
}
