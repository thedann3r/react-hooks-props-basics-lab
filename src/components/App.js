// App.js
import React from "react";
import Home from "./Home";
import About from "./About";

const user = {
  name: "Liza",
  city: "New York",
  bio: "This is a sample bio.",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username"
}

function App() {
  return (
    <div>
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
