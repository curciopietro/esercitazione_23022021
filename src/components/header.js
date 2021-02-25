import "./header.css";

function Header(props) {
  return (
    <header>
      <img src={props.url} alt="Website Logo"></img>
      <span>{props.webSiteName}</span>
    </header>
  );
}

export default Header;
