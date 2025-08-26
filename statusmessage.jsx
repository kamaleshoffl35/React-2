import React from "react";

function StatusMessage({ status }) {
  let style = {};

  if (status === "success") {
    style = { color: "green" };
  } else if (status === "error") {
    style = { color: "red" };
  } else if (status === "info") {
    style = { color: "blue" };
  }

  return <p style={style}>{status.toUpperCase()} message</p>;
}

export default StatusMessage;
