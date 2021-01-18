export const ADD_TASK = 'ADD_TASK'
export const EDIT_TASK = 'EDIT_ASK'
export const DELETE_TASK = 'DELETE_TASK'

export const addTask = (id, text) => ({
    type: ADD_TASK,
    payload: {
        id: id,
        text: text
    }
})

export const editTask = (id, text) => ({
    type: EDIT_TASK,
    payload: {
        id: id,
        text: text
    }
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {
        id: id
    }
})