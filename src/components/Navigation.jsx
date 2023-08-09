import "../styles/Navigation.css";
const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/Logo.svg" alt="Logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Cakes</li>
        <li href="#">About Me</li>
        <li href="#">Contact Me</li>
      </ul>
      <button className="select-cake">Select Cake</button>
    </nav>
  );
};

export default Navigation;
