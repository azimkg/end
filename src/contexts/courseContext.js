import React, { useReducer } from "react";
import axios from "axios";
import { AUTH_API } from "../helpers/API";
import { GET_ALL_COURSES, GET_ONE_COURSES } from "../helpers/Cases";

export const courseContext = React.createContext();

const INIT_STATE = {
  courses: [],
  lesson: null,
  countLesson: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COURSES:
      return {
        ...state,
        courses: action.payload.results,
        // countLesson: action.payload.count,
      };
    case GET_ONE_COURSES:
      return {
        ...state,
        lesson: action.payload,
      };
    default:
      return state;
  }
};

const CourseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getAllCourses() {
    let res = await axios.get(
      `${AUTH_API}/course/api/v1/` + window.location.search
    );
    console.log(res);
    dispatch({
      type: GET_ALL_COURSES,
      payload: res.data,
    });
  }
  async function getOneCourses(id) {
    let { data } = await axios.get(`${AUTH_API}/course/api/v1/${id}/`);

    dispatch({
      type: GET_ONE_COURSES,
      payload: data,
    });
  }
  return (
    <courseContext.Provider
      value={{
        courses: state.courses,
        lesson: state.lesson,
        countLesson: state.countLesson,
        getAllCourses,
        getOneCourses,
      }}
    >
      {children}
    </courseContext.Provider>
  );
};
export default CourseContextProvider;
