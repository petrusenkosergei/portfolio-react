import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Skill from "./Skill/Skill";
import reactIcon from "../../Images/react-icon.png";
import jsIcon from "../../Images/javascript_633988.png";
import htmlIcon from "../../Images/html_icon.svg";
import gulpIcon from "../../Images/Skills/gulp.svg";
import sassIcon from "../../Images/Skills/sass-1.svg";
import reduxIcon from "../../Images/Skills/redux.png";
import Fade from 'react-reveal/Fade'


function Skills() {
  let react = reactIcon;
  let js = jsIcon;
  let html = htmlIcon;
    let gulp = gulpIcon;
    let sass = sassIcon;
    let redux = reduxIcon;
  return (
      <div className={styles.skills}>
          <Fade bottom>
        <div className={styles.container}>
          <BlockTitle title={"My skills"}/>
          <div className={styles.skillsWrapper}>
            <Skill title={"HTML5&CSS3"}
                   icon = {html}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Nulla, veniam."}/>
            <Skill title={"JS (ES6)"}
                   icon = {js}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Nulla, veniam."}/>
            <Skill title={"React"}
                   icon = {react}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Nulla, veniam."}/>
              <Skill title={"Gulp"}
                     icon = {gulp}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Nulla, veniam."}/>
              <Skill title={"Sass"}
                     icon = {sass}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Nulla, veniam."}/>
              <Skill title={"Redux"}
                     icon = {redux}
                     description={"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Nulla, veniam."}/>
          </div>
          </div>
          </Fade>
        </div>
  );


          {/*<div className={styles.skillsWrapper}>*/}
          {/*  <div className={styles.skill}>*/}
          {/*    <div className={styles.icon}>*/}
          {/*      <img src="" alt=""/>*/}
          {/*    </div>*/}
          {/*    <span className={styles.skillTitle}>HTML&CSS</span>*/}
          {/*    <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Nulla, veniam.</span>*/}
          {/*  </div>*/}
          {/*  <div className={styles.skill}>*/}
          {/*    <div className={styles.icon}>*/}
          {/*      <img src="" alt=""/>*/}
          {/*    </div>*/}
          {/*    <span className={styles.skillTitle}>JS</span>*/}
          {/*    <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis.</span>*/}
          {/*  </div>*/}
          {/*  <div className={styles.skill}>*/}
          {/*    <div className={styles.icon}>*/}
          {/*      <img src="" alt=""/>*/}
          {/*    </div>*/}
          {/*    <span className={styles.skillTitle}>REACT</span>*/}
          {/*    <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis expedita nesciunt soluta.</span>*/}
          {/*  </div>*/}
          {/*</div>*/}

}

export default Skills;
