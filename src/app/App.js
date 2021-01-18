import './App.scss';
import Controls from "../components/controls/controls";
import ListItem from "../components/list-item/list-item";
import { connect } from 'react-redux'

function App(props) {
    const {tasks} = props
    return (
        <div className="App">
            <div className="wrapper">
                <h2 className={'list-header'}>To Do List</h2>

                <ul className="list">
                    {tasks.map((item) => {
                        return (
                            <ListItem text={item.text} id={item.id} key={item.id}/>
                        )
                    })}
                </ul>

                <Controls/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state
})

export default connect(mapStateToProps)(App);
