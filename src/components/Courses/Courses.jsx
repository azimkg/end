import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { courseContext } from "../../contexts/courseContext";
import edu from "../../assets/edu.svg";
import log from "../../assets/log.svg";
import "./Courses.css";
import { authContext } from "../../contexts/authContext";

const Courses = () => {
  const { getAllCourses, courses, countLesson } = useContext(courseContext);
  const { user } = useContext(authContext);

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div style={{ backgroundColor: "#EEEEEE", paddingTop: "40px" }}>
      {user ? (
        <div className="container courser_main_page">
          <h2 className="courses_title">Все курсы</h2>
          <div className="courses_name">
            <div className="course_name-left">
              {courses.map((item) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={item.id}
                  to={`/courses/${item.id}`}
                >
                  <div className="courses_name_place">
                    <h4 className="courses_name-title">{item.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
            <div className="course_name-right">
              <img src={edu} alt="image" className="course_name-right-img" />
              <p className="course_name-right_title">
                Здесь доступны все курсы приобретенные вами.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="users_notPage">
          <div className="users_notPage-main">
            <img src={log} alt="login" className="login_image" />
            <p className="course_name-right_title">
              Вам надо <Link to="/auth">авторизоваться</Link> , чтобы посмотреть
              все курсы.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
