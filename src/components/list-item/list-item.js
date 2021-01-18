import React, {useState, useRef} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteTask, editTask} from '../../store/action'

const ListItem = ({text, id, delItem, editItem}) => {

    const [isEdit, setIsEdit] = useState(false)

    const inputRef = useRef(null)

    const handleContentChange = () => {
        setIsEdit(true)
    }

    const handleContentDelete = () => {
        delItem(id)
    }

    const handleContentAccept = () => {
        editItem(id, inputRef.current.value)
        setIsEdit(false)
    }

    const handleContentCancel = () => {
        setIsEdit(false)
    }

    return(
        <li className="list__item">
            {!isEdit ?
                <>
                    <span className={'list__item-text'}>{text}</span>
                    <div className="list__item-control">
                        <button className={'list__item-control-edit'} onClick={handleContentChange}>📝</button>
                        <button className={'list__item-control-delete'} onClick={handleContentDelete}>❌</button>
                    </div>
                </>
                :
                <>
                    <input className={'list__item-text list__item-text--edit'} type="text" placeholder={'text'} ref={inputRef} defaultValue={text}/>
                    <div className="list__item-control">
                        <button className={'list__item-control-accept'} onClick={handleContentAccept}>✔</button>
                        <button className={'list__item-control-cancel'} onClick={handleContentCancel}>➖</button>
                    </div>
                </>

            }
        </li>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        delItem: bindActionCreators(deleteTask, dispatch),
        editItem : bindActionCreators(editTask, dispatch)
    }
}

export default connect(()=>({}), mapDispatchToProps)(ListItem)