import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductCatalog from './components/ProductCatalog'

function App() {
  return (
    <ProductCatalog />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

