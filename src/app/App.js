import './App.scss';
import Controls from "../components/controls/controls";
import ListItem from "../components/list-item/list-item";
import { tacks } from "../mock/tacks"

// import { connect } from 'react-redux'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <h2 className={'list-header'}>To Do List</h2>

                <ul className="list">
                    {tacks.map((item) => {
                        return (
                            <ListItem text={item.text} key={item.id}/>
                        )
                    })}
                </ul>

                <Controls/>
            </div>
        </div>
    );
}

export default App;
