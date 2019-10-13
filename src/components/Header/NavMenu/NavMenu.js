import React from 'react';
import styles from './NavMenu.module.css';



function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a href="#Main" className={styles.link}>Home</a>
            <a href="#Skills" className={styles.link}>Skills</a>
            <a href="#Project" className={styles.link}>Project</a>
            <a href="#Contact" className={styles.link}>Contact</a>
        </div>

    );
}

export default NavMenu;
