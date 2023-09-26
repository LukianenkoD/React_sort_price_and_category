import React from 'react'

function ProductsList({products, selectedCategory, sortProducts}) {
  
  function productsCategory(){
    if(selectedCategory===''){
        if(sortProducts==='lowToHigh'){
        const resultSort = products.sort((a,b)=>a.price-b.price);
        return resultSort.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)
    } else if(sortProducts==='HighToLow'){
        const resultSort = products.sort((a,b)=>b.price-a.price);
        return resultSort.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)
    }

  }else if(selectedCategory==='Electronics'){
        const result = products.filter((product)=>product.category ==='Electronics');
        if(sortProducts==='lowToHigh'){
        const resultSort = result.sort((a,b)=>a.price-b.price);
        return resultSort.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)
    } else if(sortProducts==='HighToLow'){
        const resultSort = result.sort((a,b)=>b.price-a.price);
        return resultSort.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)
    }
    return result.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)

  }else if(selectedCategory==='Clothes'){
        const result = products.filter((product)=>product.category ==='Clothes');
        if(sortProducts==='lowToHigh'){
        const resultSort = result.sort((a,b)=>a.price-b.price);
        return resultSort.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)
    } else if(sortProducts==='HighToLow'){
        const resultSort = result.sort((a,b)=>b.price-a.price);
        return resultSort.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)
    }
    return result.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)

  }else if(selectedCategory==='Books'){
        const result = products.filter((product)=>product.category ==='Books');
        if(sortProducts==='lowToHigh'){
        const resultSort = result.sort((a,b)=>a.price-b.price);
        return resultSort.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)
    } else if(sortProducts==='HighToLow'){
        const resultSort = result.sort((a,b)=>b.price-a.price);
        return resultSort.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)
    }
    return result.map((product)=>
        <p key={product.id}>{product.title} - {product.price}</p>)

  }
}

    return (
    <>
    {
    productsCategory()
    }
    </>
   
  )
}

export default ProductsList

//Реализуйте фильтрацию товаров по категории. Если selectedCategory не равна пустой строке, показывайте только товары с соответствующей категорией. Если selectedCategory равна пустой строке, показывайте все товары.