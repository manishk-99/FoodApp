import React, { useState } from "react";

import "./styles.css";

var Data = {
  Indian: [
    { item: "Rajma Chawal", rating: "5/5" },
    { item: "Chhole Bhature", rating: "4.5/5" },
    { item: "Aloo gobi", rating: "4/5" }
  ],
  Chinese: [
    { item: "Dumplings", rating: "3.5/5" },
    { item: "Noodles", rating: "4/5" },
    { item: "Momos", rating: "5/5" }
  ],
  SouthIndian: [
    { item: "Dosa", rating: "5/5" },
    { item: "Idli", rating: "3.5/5" },
    { item: "Vadas", rating: "4/5" }
  ]
};

var foodArray = Object.keys(Data);

export default function App() {
  const [food, setFood] = useState("Indian");
  const foodSet = (data) => {
    setFood(data);
  };

  return (
    <div className="App">
      <br />
      <h2 className="text-center color">Food Recommendation with Ratings!</h2>
      <div>
        <ul className="no-bullet">
          {foodArray.map((data, index) => {
            return (
              <button
                key={index}
                className="list-inline listButton"
                onClick={() => foodSet(data)}
              >
                {data}
              </button>
            );
          })}
        </ul>
      </div>

      <ul className="no-bullet">
        {Data[food].map((data, index) => {
          return (
            <li className="foodList" key={index}>
              <div>
                Food Item: <strong> {data.item}</strong>
              </div>
              <div>
                Rating: <strong>{data.rating}</strong>
              </div>
            </li>
          );
        })}
      </ul>
      <footer className="footer">
        <p>Favourite food Items available in India</p>
      </footer>
    </div>
  );
}
