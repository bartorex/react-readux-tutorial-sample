import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CoursesList from './coursesList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index) {
        return (
            <tr key={index} >
                <td>{course.title}</td>
                <td>
                    <input
                        type="button"
                        value="Delete"
                        className="btn btn-danger"
                    />
                </td>
            </tr>
        )
    }

    render() {
        const { courses } = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <CoursesList courses={courses} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);