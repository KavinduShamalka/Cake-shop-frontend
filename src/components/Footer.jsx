import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src="/images/Logo.svg" alt="Logo" />
        </div>
        <ul>
          <li href="#">Dlievery Info</li>
          <li href="#">Contact</li>
          <li href="#">FAQ</li>
        </ul>
        <div className="social">
          <a href="#">
            <img src="/images/15.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/images/16.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/images/17.png" alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <span>Home Made Cakes - All Right Reserved - 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
