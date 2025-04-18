import React, { useState, useEffect } from 'react';
import '../styles/Product.css';
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from your backend
    fetch('https://svc-1036011900881.us-central1.run.app/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products data:', error));
  }, []);

 return (
    <div className="container-product">
      <h2>Our Products</h2>
      <table>
        <thead >
          <tr>
            <th>Product Name</th>
            <th>Actual Price</th>
            <th>Discounted Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.crackers_name}</td>
              <td>${product.actual_price}</td>
              <td>${product.discount_price}</td>
              <td>{product.quantity}</td>
              <td>${product.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
