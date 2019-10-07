import React from 'react';
import styles from './Footer.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import instagramIcon from "../../Images/Instagram_icon.png"
import fasebookIcon from "../../Images/Facebook_icon.png"
import vkIcon from "../../Images/VK_icon.png"
import linkedinIcon from "../../Images/Linkedin_icon.png"
import Flip from 'react-reveal/Flip';

function Footer() {
    return (
        <div className={styles.footer}>
            <Flip bottom>
            <div className={styles.container}>
                <BlockTitle title={"Sergei Petrusenko"}/>
                <div className={styles.socialBlock}>
                    <div className={styles.socialIcon}>
                        <a href ="" >
                            <img src ={instagramIcon} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href ="" >
                            <img src ={fasebookIcon} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href ="" >
                            <img src ={vkIcon} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href ="" >
                            <img src ={linkedinIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>©2019 Все права защищены</span>
            </div>
            </Flip>
        </div>
    );
}

export default Footer;
