import {ADD_TASK, EDIT_TASK, DELETE_TASK} from './action'
import {tasks} from '../mock/tacks'

const tasksReducer = (state = tasks, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    isEdit: action.payload.isEdit
                }
            ]
        }
        case EDIT_TASK: {
            return [
                ...state, {
                    id: action.payload.id,
                    text: action.payload.text,
                    isEdit: action.payload.isEdit
                }
            ]
        }
        case DELETE_TASK: {
            return [
                ...state, {
                    id: action.payload.id
                }
            ]
        }
        default: {
            return state
        }
    }
}

export default tasksReducer