import MainNavigation from "./components/UI/MainNavigation";

import "./App.css";

<<<<<<< Updated upstream
function App() {
  return <MainNavigation />;
=======
const DUMMY_HABITS = [
  {
    title: "Exercise 1hr everyday",
    cue: "alarm at 2:00pm",
    craving: "to stop studying",
    action: "do exercise at the gym",
    reward: "get buff and tasty protein shake",
    streaks: 0,
  },
];

function App() {
  return (
    <>
      <MainNavigation />
      <HabitsList habits={DUMMY_HABITS} />
    </>
  );
>>>>>>> Stashed changes
}

export default App;
