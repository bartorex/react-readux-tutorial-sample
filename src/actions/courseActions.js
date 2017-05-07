export function createCourse(course) {
    return { type: 'CREATE_COURSE', course };
}

export function customDeleteCourse(course) {
    return { type: 'CUSTOM_DELETE_COURSE', course };
}