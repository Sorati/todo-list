import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {addTask} from '../../store/action'
import {bindActionCreators} from 'redux'

const Controls = (props) => {
    const buttonRef = useRef(null)

    const handleAddItem = ({key}) => {
        if(buttonRef.current.value.length >= 3){
            const {addNewTask} = props
            addNewTask((new Date()).getTime(), buttonRef.current.value)
            buttonRef.current.value = ''
        }
    }

    return (
        <div className="controls">
            <input ref={buttonRef} className={'controls__input'} type="text" placeholder={'text'}/>
            <button onClick={handleAddItem} className={'controls__button'}>✔</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask: bindActionCreators(addTask ,dispatch)
    }
}

export default connect(()=>({}), mapDispatchToProps)(Controls)