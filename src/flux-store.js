import {createStore} from 'redux'

var initialState = {title: 'Item List ABC',
                    items:[{name: 'test a'},
                           {name: 'test b'},
                           {name: 'test c'}]}

var reducer = (state=initialState, action) => {
    switch(action.type) {
    case 'changeTitle':
        return { ...state, title: action.data }
    case 'addItem':
        return {...state, items: [...state.items, {name: action.data}]}
    default:
        return state
    }
}

let reduxStore = createStore(reducer)
riot.store = reduxStore

export default reduxStore
