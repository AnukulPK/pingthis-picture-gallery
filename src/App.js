import Header from "./components/header/header";
import HeaderImage from "./components/headerImage/headerImage";
import Gallery from "./components/gallery/gallery";
import "./App.css";

function App() {
  return (
    <div className="main-content">
      <Header />
      <HeaderImage />
      <Gallery />
    </div>
  );
}

export default App;
