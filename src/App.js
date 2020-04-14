import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let myDate = new Date();
  let hrs = myDate.getHours();
  // var myDate = new Date();
  // var hr = myDate.getHours();

  // var greet;
  let greet = "";
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return (
    <section class="hero">
      <div className="container">
        <div className="main-message">
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default App;

// const [date, setDate] = useState();
// const [hr, setHr] = useState(0);
// const [greet, setGreet] = useState("");

// return (
//   <>
//     {/* <Card /> */}
//     <h1>{greet}</h1>
//     <footer>
//       © {new Date().getFullYear()}, Designed by
//       {` `}
//       <a href="https://www.shaniakiat.dev">Shania Kiat</a>
//     </footer>
//   </>
// );
