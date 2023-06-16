import { useEffect, useState } from "react";

import MainNavigation from "./components/UI/MainNavigation";
import HabitsList from "./components/Habits/HabitsList";

import "./App.css";

const App = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => {
        setHabits(data.habits);
      });
  }, []);

  return (
    <>
      <MainNavigation />
      <HabitsList habits={habits} />
    </>
  );
};

export default App;
