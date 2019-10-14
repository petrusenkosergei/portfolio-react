import React from 'react';
import styles from './Project.module.css';



    function Project(props) {
        return (
            <div className={styles.projects}>
                <div className={styles.projectImg} style={props.style}></div>
                <div className={styles.projectTitle}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <a className={styles.btnShowCode} href=""><span className={styles.btnTitle} >Смотреть код</span></a>
                <a className={styles.btnShow} href=""><span className={styles.btnTitle}>Смотреть проект</span></a>
            </div>
        );
    }


export default Project;

