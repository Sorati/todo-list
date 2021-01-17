export const ADD_TASK = 'ADD_TASK'
export const EDIT_TASK = 'EDIT_ASK'
export const DELETE_TASK = 'DELETE_TASK'

export const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    payload: {
        id,
        text,
        isCompleted
    }
})

export const editTask = (text) => ({
    type: EDIT_TASK,
    payload: {
        text
    }
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {
        id
    }
})