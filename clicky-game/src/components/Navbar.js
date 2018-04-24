import React from "react";
// import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const styles = {
    navbar: {
      background: "#5133a4",
      minHeight: 70,
      position: "fixed",
      width: "100%",
      color: "#fff",
      whiteSpace: "nowrap" 
    },
    a: {
      color: "white",
      fontSize: "1.3rem",
      textDecoration: "none",
      margin: 5,
      lineHeight: 3
    },
    ul: {
      color: "white",
      margin: 0,
      padding: 0,
      listStyleType: "disc",
    },
    li: {
      display: "inline-block",
      paddingTop: 26,
      paddingBottom: 0,
      paddingLeft: 26,
      paddingRight: 0,
      width: "33.3%",
      textAlign: "center",
      listType: "none"
    }
  }

const Navbar = () => (
    <nav style={styles.navbar}>
      {/* <a style={styles.a}>Clicky Game</a> */}
      <ul>
        <li style={styles.a}>Clicky Game</li>
        <li style={styles.a}>Click an image to begin!</li>
        <li style={styles.a}>"Score: "
            "0"
            " | Top Score: "
            "0"
        </li>
      </ul>
    </nav>
  );
  
  export default Navbar;