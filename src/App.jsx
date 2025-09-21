import Car from "./components/ClassCar";
// import Car from "./components/FunctionCar";

function App() {
  const name = "Fauzi";
  const address = "Bandung";
  return <Car name={name} address={address} />;
}

export default App;
