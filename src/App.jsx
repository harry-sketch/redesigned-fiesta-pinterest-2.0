// Styles
import "./App.css";

// Components
import Header from "./components/Header/Header";
import MainView from "./components/MainView/MainView";

function App() {
  return (
    <div className="bg-gray-100 w-full h-full">
      <Header />
      <MainView />
    </div>
  );
}

export default App;
