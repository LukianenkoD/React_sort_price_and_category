import React, {useState} from 'react';
import ProductsList from './ProductsList';

function ProductsContainer() {
    const products =[
        {id:1, title:'Phone', category:'Electronics', price:10000},
        {id:2, title:'T-shirt', category:'Clothes', price:600},
        {id:3, title:'Book1', category:'Books', price:1000},
        {id:4, title:'Book2', category:'Books', price:1500},
        {id:5, title:'PC', category:'Electronics', price:15000},
    ];

    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortProducts, setSortProducts] = useState('');




  return (
    <>
     <div>
        <h1>All products</h1>
    </div>
    <div>
    <label>
        Category:
        <select value={selectedCategory}
        onChange={(e)=> setSelectedCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
            <option value="Books">Books</option>
        </select>
    </label>
    </div>
    <div>
        <label>
            Sort:
            <select
            value={sortProducts}
            onChange={(e)=> setSortProducts(e.target.value)}>
                <option value="">-</option>
                <option value="lowToHigh">Low to High</option>
                <option value="HighToLow">High To Low</option>
            </select>
        </label>
    </div>
    <ProductsList products={products} selectedCategory={selectedCategory} sortProducts={sortProducts}/>
    </>
   
  )
}

export default ProductsContainer