import "../src/css/App.css";
import Timing from "./css/timing/Timing";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["firstPage", "secondPage", "thirdPage"];

function App() {
  return (
    <div className="App">
      <ReactFullpage
        licenseKey={null}
        scrollingSpeed={1500} /* Options here */
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#071c36", "#ff5f45", "#0798ec"]}
        onLeave={(origin, destination, direction) => {
          if (origin.anchor === "firstPage") {
            let aux = document.querySelector("#item-left-h1");
            let aux1 = document.querySelector("#item-left-h4");
            let aux2 = document.querySelector("#item-rigth");
            aux.classList.replace("text-focus-in", "text-focus-offLeft");
            aux1.classList.replace("text-focus-in", "text-focus-offLeft");
            aux2.classList.replace("text-focus-end", "text-focus-offRigth");
          }
          if (destination.anchor === "firstPage") {
            let aux = document.querySelector("#item-left-h1");
            let aux1 = document.querySelector("#item-left-h4");
            let aux2 = document.querySelector("#item-rigth");
            aux.classList.replace("text-focus-offLeft", "text-focus-in");
            aux1.classList.replace("text-focus-offLeft", "text-focus-in");
            aux2.classList.replace("text-focus-offRigth", "text-focus-end");
          }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <section style={{ height: "100%" }} className="row">
                  <div className="col-md-6">
                    <h1 className="text-s1 text-focus-in" id="item-left-h1">
                      CARLOS <br />
                      ROA
                    </h1>
                    <h4 className="text-s1-sub text-focus-in" id="item-left-h4">
                      FULL STACK DEVELOPER JAVASCRIPT
                    </h4>
                  </div>

                  <div
                    className="col-md-6 text-focus-end row justify-content-center"
                    id="item-rigth"
                  >
                    <Timing />
                  </div>
                  {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button> */}
                </section>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
