import "./footer.css";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        {currentYear} &#169; {props.company}
      </p>
    </footer>
  );
}

export default Footer;
