import "./App.css";
import movies from "./movies.json";
import Channel from "./components/Channel";

function App() {
  return (
    <div className="container">
      <header>
        <img
          src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
          alt=""
        />
      </header>

      <div className="liste-programmes">
        {movies.map((movie, index) => {
          return <Channel key={index} ressource={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
