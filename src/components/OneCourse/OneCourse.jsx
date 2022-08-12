import React, { useContext, useEffect, useState } from "react";
import { courseContext } from "../../contexts/courseContext";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./OneCourse.css";
import { Pagination } from "antd";

const OneCourse = () => {
  const { getOneCourses, lesson, countLesson } = useContext(courseContext);
  const [value, setValue] = useState("");
  const [lessons, setLessons] = useState(null);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const params = useParams();
  const [vales, setVales] = useState("");

  useEffect(() => {
    getOneCourses(params.id);
  }, [params.id]);

  useEffect(() => {
    setLessons(lesson);
  }, [lesson]);

  function openLesson() {
    setOpen(true);
  }

  function openLessons() {
    setOpens(true);
  }
  console.log(vales);
  return (
    <>
      <Navbar />
      {lessons ? (
        <div className="container lesson__">
          <div className="lesson_main">
            <div className="lesson_main-left">
              <h3 className="lesson-titles">{lessons.name}</h3>
              <select
                className="lesson_select"
                size="10"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                {lessons.lesson.map((item) => (
                  <option
                    className="lesson_option"
                    value={item.name}
                    onClick={openLesson}
                    key={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="lesson_right">
              {open
                ? lessons.lesson.map((item) =>
                    item.name == value ? (
                      <div key={item.name}>
                        <video controls className="video_containers">
                          <source src={item.file} type="video/mp4"></source>
                        </video>
                        <p className="item_description">{item.description}</p>
                      </div>
                    ) : null
                  )
                : lessons.lesson.slice(0, 1).map((item) => (
                    <div key={item.name}>
                      <video controls className="video_containers">
                        <source src={item.file} type="video/mp4"></source>
                      </video>
                      <p className="item_description">{item.description}</p>
                    </div>
                  ))}
            </div>
          </div>
          <div className="lesson_none">
            <div>
              <select
                className="select__none"
                value={vales}
                onChange={(e) => setVales(e.target.value)}
              >
                {lessons.lesson.map((item) => (
                  <option
                    className="select__option"
                    value={item.name}
                    key={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {lessons.lesson.map((item) =>
                item.name == vales ? (
                  <div key={item.name} className="lesson_none-block">
                    <h3>{item.name}</h3>
                    <video controls className="video_containers1">
                      <source src={item.file} type="video/mp4"></source>
                    </video>
                    <p className="item_description1">{item.description}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  );
};

export default OneCourse;
