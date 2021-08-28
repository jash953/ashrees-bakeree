import React from 'react';
import './Home.css';
import AshreePic from '../../img/AshreePic.jpeg';
import PastryBoxImage from '../../img/PastryBox.jpeg';
import GradCupcakesImage from '../../img/GradCupcakes.jpeg';
import CakePopsImage from '../../img/CakePops.jpeg';
import RasMalaiCakeImage from '../../img/RasMalaiCakes.jpeg';
import CupcakesImage from '../../img/Cupcakes.jpeg';
import CheesecakesImage from '../../img/Cheesecakes.jpeg';
import StrawberryHeartBox from '../../img/HeartShapeBox.jpeg';
import DecoratedCake from '../../img/DecoratedCake.jpeg';

const Home = () => {
  return (
    <div>
      <div className="ashree-bio">
        <img className="ashree-image" src={AshreePic} alt="Ashree"></img>
        <p className="ashree-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <section className="section-desserts">
        <ul className="desserts-showcase clearfix">
          <li>
            <figure className="dessert-photo">
              <img
                src={PastryBoxImage}
                alt="Box containing an assortment of pastries"
              />
            </figure>
          </li>
          <li>
            <figure className="dessert-photo">
              <img src={GradCupcakesImage} alt="Graduation themed cupcakes" />
            </figure>
          </li>
          <li>
            <figure className="dessert-photo">
              <img src={CakePopsImage} alt="Cake pops" />
            </figure>
          </li>
          <li>
            <figure className="dessert-photo">
              <img src={RasMalaiCakeImage} alt="Ras Malai mini cakes" />
            </figure>
          </li>
        </ul>
        <ul className="desserts-showcase clearfix">
          <li>
            <figure className="dessert-photo">
              <img src={CupcakesImage} alt="Cupcakes" />
            </figure>
          </li>
          <li>
            <figure className="dessert-photo">
              <img src={CheesecakesImage} alt="Cheesecakes" />
            </figure>
          </li>
          <li>
            <figure className="dessert-photo">
              <img
                src={StrawberryHeartBox}
                alt="Heart-shaped box containing strawberries"
              />
            </figure>
          </li>
          <li>
            <figure className="dessert-photo">
              <img
                src={DecoratedCake}
                alt="Cake decorated with pink and white icing"
              />
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
