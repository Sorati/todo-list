import React, {useState, useRef} from 'react'

const ListItem = ({text}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [textContent, setTextContent] = useState(text)

    const inputRef = useRef(null)

    const handleContentChange = () => {
        setIsEdit(true)
        console.log('handleContentChange')
    }

    const handleContentDelete = () => {
        console.log('handleContentDelete')
    }

    const handleContentAccept = () => {
        setTextContent(inputRef.current.value)
        setIsEdit(false)
        console.log('handleContentAccept')
    }

    const handleContentCancel = () => {
        setIsEdit(false)
        console.log('handleContentCancel')
    }

    return(
        <li className="list__item">
            {!isEdit ?
                <>
                    <span className={'list__item-text'}>{textContent}</span>
                    <div className="list__item-control">
                        <button className={'list__item-control-edit'} onClick={handleContentChange}>📝</button>
                        <button className={'list__item-control-delete'} onClick={handleContentDelete}>❌</button>
                    </div>
                </>
                :
                <>
                    <input className={'list__item-text list__item-text--edit'} type="text" placeholder={'text'} ref={inputRef} defaultValue={textContent}/>
                    <div className="list__item-control">
                        <button className={'list__item-control-accept'} onClick={handleContentAccept}>✔</button>
                        <button className={'list__item-control-cancel'} onClick={handleContentCancel}>➖</button>
                    </div>
                </>

            }
        </li>
    )
}

export default ListItem