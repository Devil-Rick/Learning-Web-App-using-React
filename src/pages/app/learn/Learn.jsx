import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

function Learn() {

  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <h2 className={style.back}>
          <Link to={'/courses'}>{"<<"}</Link>
        </h2>
        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {course.chapters.map((chp) => (
              <div className={style.chapterId} key={chp.chapter}>
                <NavLink to={`chapter/${chp.chapter}`}>
                  {chp.title}
                </NavLink>
              </div>
            ))}
          </ul>
        </div>

        <div className={style.courses}>
          <Outlet context={{...course}}/>
        </div>
      </div>
    </div>
  );
}

export default Learn;
