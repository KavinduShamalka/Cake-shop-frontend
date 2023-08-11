import "../styles/Cakes.css";

const Cake = () => {
  return (
    <div className="cake">
      <div className="cake-top">
        <h1>Our Cakes</h1>
      </div>
      <div className="cake-variations">
        <div className="cakes">
          <div className="center-img">
            <img className="cake" src="images/6.png" alt="birthday-cakes" />
          </div>
          <h2>Birthday Cakes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="order-btn">Order Now</button>
        </div>
        <div className="cakes">
          <div className="center-img">
            <img className="cake" src="images/7.png" alt="birthday-cakes" />
          </div>
          <h2>Wedding Cakes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="order-btn">Order Now</button>
        </div>
        <div className="cakes">
          <div className="center-img">
            <img className="cake" src="images/8.png" alt="birthday-cakes" />
          </div>
          <h2>Cup Cakes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="order-btn">Order Now</button>
        </div>
      </div>
      <div className="services-container">
        <div className="services">
          <div className="service">
            <div className="icon">
              <img className="icon-img" src="images/9.png" alt="icon" />
              <h3>Select your favorite flavor</h3>
              <p>We have a big collection of flavors, Choose your favorite</p>
            </div>
          </div>
          <div className="service">
            <div className="icon">
              <img className="icon-img" src="images/10.png" alt="icon" />
              <h3>We Pack with Care Before Send</h3>
              <p>We have a big collection of flavors, Choose your favorite</p>
            </div>
          </div>
          <div className="service">
            <div className="icon">
              <img className="icon-img" src="images/11.png" alt="icon" />
              <h3>Ontime and Fast Delvery</h3>
              <p>We have a big collection of flavors, Choose your favorite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cake;
