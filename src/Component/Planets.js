import React from "react";

export const Planets = () => {
  const plantess = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div>
      {plantess.map((plant, key) => {
        return (
          <div>
            <h1>{plant.isGasPlanet && plant.name}</h1>
          </div>
        );
      })}
    </div>
  );
};
