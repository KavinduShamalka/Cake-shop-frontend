import "../styles/Hero.css";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="name-1">Delicious</h1>
        <h1 className="name-2">Home Made Cakes</h1>
        <div className="images">
          <img className="img-1" src="images/1.png" alt="Hero" />
          <img className="img-2" src="images/2.png" alt="Hero" />
          <img className="img-3" src="images/3.png" alt="Hero" />
          <img className="img-4" src="images/4.png" alt="Hero" />
          <img className="img-5" src="images/5.png" alt="Hero" />
        </div>
        <div className="button-2">
          <button className="select-cake">Select Cake</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
