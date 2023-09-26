import React, {useRef} from 'react';
import "./Product.css";

function Product() {
    const descRef = useRef(null);
    const handleClick = ()=>{
        descRef.current.classList.toggle("show");

    }
  return (
    <div>
        <h2>Product Name</h2>
        <button onClick={handleClick}>Lore more</button>
        <div ref={descRef} className='description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit sequi mollitia ad? Beatae molestias nam expedita. Dicta, esse aut nisi illo blanditiis velit reprehenderit accusamus, beatae dolorem, fuga aliquid!</p>
        </div>
    </div>
  )
}

export default Product