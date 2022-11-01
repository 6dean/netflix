import "./App.css";
import movies from "./movies.json";

function App() {
  const tab1 = movies.map((elem) => {
    return elem.category;
  });
  const tab2 = movies.map((elem) => {
    return elem.images;
  });
  const tab3 = tab2.map((elem) => {
    return elem[0];
  });

  console.log(movies);
  console.log(tab2);
  console.log(tab3);

  return (
    <div className="container">
      <header>
        <img
          src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
          alt=""
        />
      </header>
      <div className="channel">
        <div className="Reprendreacec">
          <p>{tab1[0]}</p>
          <img src={tab2[0][1]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
