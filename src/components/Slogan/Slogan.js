import React from 'react';
import styles from './Slogan.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import LightSpeed from 'react-reveal/LightSpeed';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <LightSpeed left>
            <BlockTitle title={"I am looking for work Front-end developer"}/>
            <button className={styles.btnShow} type="submit">Hire me</button>
            </LightSpeed>
        </div>
    );
}

export default Slogan;
