export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state,
                Object.assign({}, action.course)
            ];

        case 'CUSTOM_DELETE_COURSE':
            return state.filter(course => course.title !== action.course.title);
        default:
            return state;
    }
}