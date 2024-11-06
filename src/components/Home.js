// Home.js
import React from "react";

function Home({ name, city }) {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {`${name} is a Web Developer from ${city}`}
      </h1>
    </div>
  );
}

export default Home;
