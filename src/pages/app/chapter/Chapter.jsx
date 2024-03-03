import React from "react";
import styles from "./Chapter.module.css";
import { useOutletContext, useParams } from "react-router-dom";

function Chapter() {

  const {chapterId} = useParams();
  const course = useOutletContext();
  

  const chapter = course.chapters.find((chp) => parseInt(chapterId) === chp.chapter)
  return (
    <div>
      <h1>{chapter.title}</h1>
      <hr />
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          title="React Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
