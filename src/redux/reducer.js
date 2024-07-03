import { ADD_DATA, CHANGEAVTIVE, FILTERDATA } from "./actions";

const initial = {
    active: null,
    data: [],
    original_data: []
};

export default function reducer(state = initial, action) {
    switch (action.type) {
        case CHANGEAVTIVE:
            return { ...state, active: action.payload };
        case ADD_DATA:
            let newState = { ...state, original_data: [...state.original_data, action.payload] };
            newState.data = newState.original_data;
            return newState;
        case FILTERDATA:
            let filteredState;
            if (action.payload) {
                filteredState = {
                    ...state,
                    data: state.original_data.filter((item) => {
                        return item.responseHeaders && item.responseHeaders['content-type'] && item.responseHeaders['content-type'].includes(action.payload);
                    })
                };
            } else {
                filteredState = { ...state, data: state.original_data };
            }
            return filteredState;
        default:
            return state;
    }
}
