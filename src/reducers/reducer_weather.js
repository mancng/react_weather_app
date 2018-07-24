import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ]; //Creating a new array with existing state and return that new array instead of manipulating the existing state
    }

    return state;
}