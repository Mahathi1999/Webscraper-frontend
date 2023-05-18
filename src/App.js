import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://webscraper01.onrender.com/scrape?term=${searchTerm}`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='scrapeHome'>
      <h1 className='HeadingScrape'>Product Scraper</h1>
      <div className='SearchBox'>
      <input
        type="text"
        placeholder="Enter a product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='inputBoxScrape'
      />
      <button onClick={handleSearch} className='searchBtn'>Search</button>
      </div>

      <div className='productSection'>
      {products.amazon && (
        <div className='productsList'>
          <ul>
            {products.amazon.map((product, index) => (
              <li key={index}>
                <img src={product.imageUrl} alt={product.name} />
                <div className='namePro'>{product.name}</div>
                <div className='price'>{product.price}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {products.flipkart && (
        <div className='productsList'>
          <ul>
            {products.flipkart.map((product, index) => (
              <li key={index}>
                <img src={product.imageUrl} alt={product.name} />
                <div className='namePro'>{product.name}</div>
                <div className='price'>{product.price}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {products.snapdeal && (
      <div className='productsList'>
          <ul>
            {products.snapdeal.map((product, index) => (
              <li key={index}>
                <img src={product.imageUrl} alt={product.name} />
                <div className='namePro'>{product.name}</div>
                <div className='price'>{product.price}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
  </div>
  <h1 className='footerScrape'>CopyRights@ Mahathi Periya 2023</h1>
    </div>
  );
}

export default App;
