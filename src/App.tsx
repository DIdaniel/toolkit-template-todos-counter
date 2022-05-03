import React, {useState} from "react";
import Counter from './components/Counter'
import MyTodos from "./components/MyTodos";
import "./App.css";

function App() {

    return (
        <div className="App">
            <Counter/>
            <hr/>
            <MyTodos/>
        </div>
    )
}

export default App;
