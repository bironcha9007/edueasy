import React from "react";
import OnlineCourses from "../allcourse/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourse/courses.css";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading
            subtitle="Nuestros Planes"
            title="Conoce Nuestros Planes y Servicios"
          />

          <div className="coursesCard">
            {/* copy code from coursesCard */}
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val, index) => (
                <div className="items" key={index}>
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details, teacherIndex) => (
                          <div className="box" key={teacherIndex}>
                            <div className="dimg">
                              <img src={details.dcover} alt="" />
                            </div>
                            <div className="para">
                              <h4>{details.name}</h4>
                            </div>
                            <span>{details.totalTime}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className="outline-btn">Comencemos Ahora</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
