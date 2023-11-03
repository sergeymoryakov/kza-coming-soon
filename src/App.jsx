import kzLogo from "./assets/kza-logo-t9-h150.svg";
import "./css/App.css";

function App() {
    return (
        <div>
            <div className="container">
                <div className="horisontal-box">
                    <img className="logo" src={kzLogo} alt="Logo" />
                    <h2>
                        Coming <br />
                        Soon
                    </h2>
                </div>
                <h3 className="text-gradient">Stay Tuned</h3>
            </div>
        </div>
    );
}

export default App;
