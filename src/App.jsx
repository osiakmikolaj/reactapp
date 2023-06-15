import "./styles/App.css";
import Button from "./components/button";

export default function App() {
    return (
        <div className="app">
            <div className="header">Mikołaj Osiak</div>
            <div className="btns">
                <Button />
                <Button />
                <Button />
            </div>
        </div>
    );
}
