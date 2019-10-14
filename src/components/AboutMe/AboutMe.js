import React from 'react';
import styles from './AboutMe.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";


function AboutMe() {
    return (
        <div className={styles.About}>
            <BlockTitle title={"About Me"}/>

        </div>
    );
}

export default AboutMe;
