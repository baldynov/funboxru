import React, {Component} from 'react';
import './App.scss';
import ItemList from "./components/ItemList/ItemList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <p>Ты сегодня покормил кота?</p>
                </header>
                <content>
                    <ItemList/>
                </content>
            </div>
        );
    }
}

export default App;
