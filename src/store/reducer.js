import {ADD_TASK, EDIT_TASK, DELETE_TASK} from './action'
import {tasks} from '../mock/tacks'

const tasksReducer = (state = tasks, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text
                }
            ]
        }
        case EDIT_TASK: {
            return [...state].map(task => {
                if(task.id === action.payload.id){
                    console.log(task.text)
                    task.text = action.payload.text
                }
                return task
            })
        }
        case DELETE_TASK: {
            return [...state].filter(task => task.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}

export default tasksReducer