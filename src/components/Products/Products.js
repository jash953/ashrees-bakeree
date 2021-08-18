import React from 'react';
import './Products.css';
import PastryBoxImage from '../../img/PastryBox.jpeg';
import GradCupcakesImage from '../../img/GradCupcakes.jpeg';
import CakePopsImage from '../../img/CakePops.jpeg';
import RasMalaiCakeImage from '../../img/RasMalaiCakes.jpeg';
import CupcakesImage from '../../img/Cupcakes.jpeg';
import CheesecakesImage from '../../img/Cheesecakes.jpeg';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {
  return (
    <div className="products-div">
      <h2 className="products-title">PRODUCTS</h2>
      <div className="product-cards">
        <ProductCard
          title="Pastry Box"
          image={PastryBoxImage}
          imageAlt="Pastry Box"
          imageClass="pastry-box-image"
        />
        <ProductCard
          title="Graduation Cupcakes"
          image={GradCupcakesImage}
          imageAlt="Grad Cupcakes"
          imageClass="grad-cupcakes-image"
        />
        <ProductCard
          title="Cake Pops"
          image={CakePopsImage}
          imageAlt="Cake Pops"
          imageClass="cake-pops-image"
        />

        <ProductCard
          title="Ras Malai Cakes"
          image={RasMalaiCakeImage}
          imageAlt="Ras Malai Cakes"
          imageClass="ras-malai-image"
        />
        <ProductCard
          title="Cheesecakes"
          image={CheesecakesImage}
          imageAlt="Cheesecakes"
          imageClass="cheesecake-image"
        />
        <ProductCard
          title="Cupcakes"
          image={CupcakesImage}
          imageAlt="Cupcakes"
          imageClass="cupcakes-image"
        />
      </div>
    </div>
  );
};

export default Products;