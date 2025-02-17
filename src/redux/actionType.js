import { INCREMENT_COUNT, DECREMENT_COUNT, ADD_TODO } from "./actions"

export const incrementCountBy1 = (payload) => {
    return {
        payload: payload,
        type: INCREMENT_COUNT
    }
}
export const decrementCountBy1 = (payload) => {
    return {
        payload: payload,
        type: DECREMENT_COUNT
    }
}

export const addTodo = (payload) => {
    return {
        payload: payload,
        type: ADD_TODO
    }
}