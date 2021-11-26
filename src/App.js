import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Image from './images/Banner_XXL_Monitor.jpg';
import Sign from './components/SignIn'


function App() {
  return (
    <div className={"container"}>
      <div style={{ marginTop: "10px" }}>
        <div className="card text-center">
          <div className="card-body">
            <h3 className="card-title">EXAM RESULTS</h3>
            {/* <img className={"image"} src={Image} alt="logo"/> */}
          </div>
          <div className="card-footer text-muted">
            <a className={"links"} href="https://ishanlakshitha.lk/">
              ISHANLAKSHITHA.LK
            </a>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Card
              color={"#d8d8d8"}
              cheader={"FIND YOUR EXAM RESULTS HERE"}
              ccontent={""}
            />
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <Sign></Sign>
    // </div>
  );
}

export default App;
