import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const products = useProducts();
  console.log(products);

  return (
    <div className="flex flex-col gap-y-4 px-5">
      <Navigation />
      <div className="    "></div>
      <div className="container grid grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <div
              className="container shadow-xl rounded-lg overflow-hidden flex flex-col pb-5"
              key={product.id}
            >
              <div className="h-20">
                <img
                  src={product.images[1]}
                  className="object-cover object-center h-full"
                  alt=""
                />
              </div>

              <p className="  ">
                {product.title}
                {''}
                <span className=" rounded-lg bg-gray-200  ">
                  {' '}
                  {product.category}
                </span>
              </p>
              <p className="text-xs pb-3 pt-3 text-gray-500 flex-grow">
                {product.description}
              </p>
              <p className=" text-xs pb-3">${product.price}</p>
              <p className=" "> Available: {product.stock} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
