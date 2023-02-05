import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductCatalog from './components/ProductCatalog'
import ProductData from '../data/products';

function App() {
  return (
    <ProductCatalog products={ProductData} />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

