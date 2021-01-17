import {ADD_TASK, EDIT_TASK, DELETE_TASK} from './action'

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                id: action.id,
                text: action.text,
                isEdit: action.isEdit
            }
        }
        case EDIT_TASK: {
            return {
                ...state,
                id: action.id,
                text: action.text,
                isEdit: action.isEdit
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                id: action.id,
            }
        }
        default: {
            return state
        }
    }
}

export default tasksReducer