export const filterTagTodos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TAG": {
            if (state.indexOf(action.tag) === -1) return [...state, action.tag];
            return state
        } case "DELETE_TAG": {
            return state.filter(tag => tag !== action.tag);
        } case "DELETED_STATE": {
            return [];
        } default: {
            return state;
        }
    }
}