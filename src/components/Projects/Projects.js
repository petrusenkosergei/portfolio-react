import React from 'react';
import styles from './Projects.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Project from './Project/Project'
import todolistBgImg from '../../Images/react_todo_list.jpg'
import socialNetworkingBgImg from '../../Images/html_icon.svg'
import calculatorBgImg from '../../Images/Count.png'
import Fade from 'react-reveal/Fade'


function Projects() {
    const todolistImg = {
        backgroundImage: `url(${todolistBgImg})`,
    };
    const socialNetworkingImg = {
        backgroundImage: `url(${socialNetworkingBgImg})`,
    };
    const calculatorImg = {
        backgroundImage: `url(${calculatorBgImg})`,
    };

    return (
        <div id="Project" className={styles.projects}>
            <Fade bottom>
            <div className={styles.container}>
                <BlockTitle title={"My project"}/>
                <div className={styles.projectWrapper}>
                    <Project title = {'To do list'}
                             style={todolistImg}
                            description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                    <Project title = {'To do list'}
                             style={socialNetworkingImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                    <Project title = {'To do list'}
                             style={calculatorImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                    <Project title = {'To do list'}
                             style={calculatorImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Projects;
