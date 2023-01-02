import { useEffect, useState } from 'react';

const useProduct = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await getProduct();

    setProduct(response.data.product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return product;
};

export default useProduct;
