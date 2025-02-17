import { INCREMENT_COUNT, DECREMENT_COUNT, ADD_TODO } from "./actions"

const initialState = {
    count: 0,
    todo: [],
    api: []
}
const reducer = (state = initialState, action) => {

    console.log(action, "action")
    if (action.type == INCREMENT_COUNT) {
        return {
            ...state, count: state.count + 1,
            todo: [...state.todo, state.count]

        }
    } else if (action.type == DECREMENT_COUNT) {
        return {
            ...state, count: state.count - action.payload
        }
    } else if (action.type == ADD_TODO) {
        return {
            ...state,
            api: [...action.payload]
        }
    }


    else {
        return state
    }

}
export default reducer



// add delete edit

// input data  add to show