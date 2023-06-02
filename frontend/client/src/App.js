import MainNavigation from "./components/UI/MainNavigation";
import HabitsList from "./components/Habits/HabitsList";

import "./App.css";

const DUMMY_HABITS = [
  {
    title: "",
    cue: "",
    craving: "",
    action: "",
    reward: "",
  },
  {
    title: "",
    cue: "",
    craving: "",
    action: "",
    reward: "",
  },
  {
    title: "",
    cue: "",
    craving: "",
    action: "",
    reward: "",
  },
];

function App() {
  return (
    <>
      <MainNavigation />
      <HabitsList />
    </>
  );
}

export default App;
