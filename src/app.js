/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "tiger", "robot"];
  let action = [
    "took my",
    "stole my",
    "threw my",
    "yelled at my",
    "bit my",
    "ate my"
  ];
  let posession = ["homework", "toe", "sock", "bicicle", "car", "shoe"];
  let where = [
    "on the street",
    "at the cafeteria",
    "in my house",
    "at the librery",
    "in my driveway"
  ];
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posessionIndex = Math.floor(Math.random() * posession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    posession[posessionIndex] +
    " " +
    where[whereIndex]
  );
};
