import React from "react";

function StyledButton() {
  
  const styles = {
    fontSize: "18px",
    padding: "10px 20px",
    backgroundColor: "teal",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return <button style={styles}>Click Me</button>;
}

export default StyledButton;
