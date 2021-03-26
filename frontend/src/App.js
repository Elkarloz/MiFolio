import "../src/css/App.css";

function App() {
  return (
    <div className="App">
      <section
        style={{ backgroundColor: "#071c36", height: "800px" }}
        className="row"
      >
        <div className="col-md-6">
          <h1 className="text-s1 text-focus-in ">
            CARLOS <br />
            ROA
          </h1>
        </div>

        <div className="col-md-6">
          <h1 className="text-s1-2 text-focus-end">MI PORTAFOLIO</h1>
        </div>

        {/* PROBANDO LA ANIMACION */}
      </section>
    </div>
  );
}

export default App;
