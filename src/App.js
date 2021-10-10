import "./styles.css";
import React, { useState } from "react";

var dishes = {
  brunch: [
    {
      dish: "Puttu and Kadala curry",
      description:
        "Puttu and Kadala curry (black chickpeas curry) is one of the most popular nutritious and healthiest brunch of kerala. This combo makes for the ideal breakfast dish that is filling and healthy.",
      rating: "4/5"
    },
    {
      dish: "Idli and Sambar",
      description:
        "Idli Sambar is a popular South-Indian brunch which is very easy to cook and loaded with much nutritious value. It is a winning combination made for each other ",
      rating: "4.5/5"
    },
    {
      dish: "Idiyappam and Egg curry ",
      description:
        "The soft steamed idiyappam in combination with traditionally cooked egg curry is one of the delicate breakfast for everyone who loves Kerala Cuisine.",
      rating: "5/5"
    },
    {
      dish: "Dosa and Chutney",
      description:
        "Dosa and chutney is one of the common breakfast dishes in every keralite's house. Hot,thin and crispy dosa with coconut chutney is a perfect combo.",
      rating: "4/5"
    },
    {
      dish: "Ela Ada",
      description:
        "Rice parcels encased in a dough made of rice flour, with fresh coconut and jaggery fillings, steamed in banana leaf. ",
      rating: "4.8/5"
    }
  ],
  snacks: [
    {
      dish: "Pazhampori",
      description:
        "Crispy, sizzling hot Pazhampori or Banana Fritters are among the most loved evening snacks in Malayali households. ",
      rating: "5/5"
    },
    {
      dish: "Uzhunnu Vada",
      description: "Crispy, spicy, vegetarian snack.",
      rating: "4.5/5"
    },
    {
      dish: "Unnakaya",
      description:
        "Crispy exterior acts as the perfect shield for a sweet liquid mix inside. ",
      rating: "4.5/5"
    },
    {
      dish: "Parippu Vada",
      description:
        "Crispy, spicy and yummy snack made with lentils is a perfect tea time snack.",
      rating: "4.8/5"
    },
    {
      dish: "Banana Chips",
      description:
        "Crispy fried slices of banana, often served in Onam sadya meal.",
      rating: "5/5"
    }
  ],
  desert: [
    {
      dish: "Palada Payasam",
      description:
        "Payasam prepared with palada (rice ada) is common sweet delicacy prepared in almost all Kerala households during festival of Onam and many other occasions.",
      rating: "4/5"
    },
    {
      dish: "Vatta Appam",
      description:
        "Vattayappam is Kerala's own fermented Steamed Rice Cake. One of the healthiest traditional tea time snack with almost no oil",
      rating: "5/5"
    },
    {
      dish: "Kadala Payasam",
      description:
        "Traditionally prepared thick and dense jaggery based dessert usually relished during Sadhyas .",
      rating: "5/5"
    },
    {
      dish: "Therali Appam",
      description:
        "Steamed rice dessert sweetened with jaggery as well as coconut, made in cone shaped leaf warp made of Vayana ila (Indian bay leaf) ",
      rating: "4.8/5"
    },
    {
      dish: "Black Halwa",
      description:
        "Black Halwa or Kozhikodan Halwa is one of the most famous sweet that is well known all over the country",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var genreToShow = Object.keys(dishes);
  var [genre, setGenre] = useState("brunch");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  console.log(genreToShow.brunch);
  return (
    <div className="App">
      <h1 style={{ padding: "1rem", color: "#65A30D" }}>🍝 Kerala Cuisine</h1>
      <small style={{ padding: "1rem", fontWeight: "bold" }}>
        Know more about traditional dishes of Kerala. Select a genre to get
        started
      </small>
      <div>
        {genreToShow.map(function (item) {
          return (
            <button
              style={{
                margin: "1rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                backgroundColor: "#65A30D",
                fontWeight: "bold",
                fontSize: "large",
                border: "none",
                color: "white"
              }}
              onClick={() => genreClickHandler(item)}
            >
              {item}
            </button>
          );
        })}

        {dishes[genre].map(function (fooditem) {
          return (
            <div>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    border: "3px solid",
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    borderColor: "#65A30D"
                  }}
                >
                  <h3 style={{ color: "#65A30D" }}>{fooditem.dish}</h3>
                  <p>{fooditem.description}</p>
                  <p>{fooditem.rating}</p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
