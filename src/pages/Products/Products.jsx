import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const products = useProducts();
  console.log(products);

  return (
    <div className="flex flex-col gap-y-4 px-5  sm:px-0 ">
      <Navigation />

      <img
        src="https://images.pexels.com/photos/4384141/pexels-photo-4384141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="object-cover object-center h-96 -mt-5"
      />

      <div className="container md:px-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 -mt-20">
        {products.map((product) => {
          return (
            <div
              className=" shadow-xl rounded-lg overflow-hidden flex flex-col"
              key={product.id}
            >
              <div className=" overflow-hidden border-b h-36 -mx-4 -mt-4 ">
                <img
                  src={
                    product?.images?.[5] ||
                    product?.images?.[4] ||
                    product?.images?.[3] ||
                    product?.images?.[2] ||
                    product?.images?.[1] ||
                    product?.images?.[0]
                  }
                  className="object-fit object-cover object-center h-full w-full "
                  alt=""
                />
              </div>
              <div className="p-3">
                <div className="flex flex-col gap-y-1 items-start mb-2">
                  <p className="font-bold">{product.title}</p>
                  <span className=" rounded-xl  text-xs bg-gray-200  ">
                    {product.category}
                  </span>
                </div>

                <p className="text-xs  text-gray-500 flex-grow mb-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-x-2  ">
                  <p className="text-red-500">
                    <span className="text-xs">₱</span>
                    {product.price}
                  </p>
                  <p className="text-gray-400 text-xs">
                    -{product.discountPercentage}%
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-2">
                    Available:{product.stock}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
