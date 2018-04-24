import React from "react";
// import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const styles = {
    header: {
        background: "#2c323c",
        backgroundRepeat:"repeat",
        color: "#fff",
        minHeight: 400,
        paddingTop: 180,
        paddingRight: 20,
        paddingBottom: 140,
        paddingLeft: 20,
        textAlign: "center",
        display: "s"   
  },
    h1: {
        marginBottom: 30,
        fontSize: "4rem",
        fontFamily: "sans-serif",
        display: "block",
        fontWeight: "bold"
  },
    h2: {
        display: "block",
        fontSize: "1.5em",
        fontWeight: "bold"
    }
}

const Header = () => (
  <header className="header">
    <h1 style = {styles.h1}>Clicky Game!</h1>
    <h2 style = {styles.h2}>Click on an image to earn points, but don't click on any 
        more than once!
    </h2>
  </header>
);

export default Header;
