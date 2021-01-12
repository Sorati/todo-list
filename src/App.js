import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <h2 className={'list-header'}>ToDo List</h2>

                <ul className="list">
                    <li className="list__item">
                        <span className={'list__item-text'}>text</span>
                        <div className="list__item-control">
                            <button className={'list__item-control-edit'}>📝</button>
                            <button className={'list__item-control-delete'}>❌</button>
                        </div>
                    </li>

                    <li className="list__item">
                        <span className={'list__item-text'}>text</span>
                        <div className="list__item-control">
                            <button className={'list__item-control-edit'}>📝</button>
                            <button className={'list__item-control-delete'}>❌</button>
                        </div>
                    </li>

                    <li className="list__item">
                        <input className={'list__item-text list__item-text--edit'} type="text" placeholder={'text'}/>
                        <div className="list__item-control">
                            <button className={'list__item-control-accept'}>✔</button>
                            <button className={'list__item-control-cancel'}>➖</button>
                        </div>
                    </li>

                </ul>

                <div className="controls">
                    <input className={'controls__input'} type="text" placeholder={'text'}/>
                    <button className={'controls__button'}>✔</button>
                </div>
            </div>
        </div>
    );
}

export default App;
