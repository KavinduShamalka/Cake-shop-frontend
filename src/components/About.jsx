import "../styles/About.css";

const About = () => {
  return (
    <div className="About-container">
      <h1>About Me</h1>
      <div className="About-content">
        <div className="About-img">
          <div className="img-12">
            <img src="images/12.jpg" alt="img-12" />
          </div>
          <div className="img-13">
            <img src="images/13.jpg" alt="img-13" />
          </div>
          <div className="img-14">
            <img src="images/14.jpg" alt="img-14" />
          </div>
        </div>

        <div className="About-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <br />
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <div className="button-order">
            <button className="Contact-btn">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
