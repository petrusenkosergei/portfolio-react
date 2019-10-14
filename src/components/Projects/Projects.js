import React from 'react';
import styles from './Projects.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Project from './Project/Project'
import todolistBgImg from '../../Images/react_todo_list.jpg'
import socialNetworkingBgImg from '../../Images/reactjs-tutorial-700x280.png'
import calculatorBgImg from '../../Images/Count.png'
import BrandiImgBgImg from '../../Images/Brandi.jpg'
import TeamgBgImg from '../../Images/teamProject.jpeg'
import DogBgImg from '../../Images/dog.png'
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
    const BrandiImg = {
        backgroundImage: `url(${BrandiImgBgImg})`,
    };
    const TeamImg = {
        backgroundImage: `url(${TeamgBgImg})`,
    };
    const DogImg = {
        backgroundImage: `url(${DogBgImg})`,
    };

    return (
        <div id="Project" className={styles.projects}>
            <div className={styles.container}>
                <BlockTitle title={"My project"}/>
                <div className={styles.projectWrapper}>
                    <Project title = {'To do list'}
                             style={todolistImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                    <Project title = {'Social Network'}
                             style={socialNetworkingImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. "}/>
                    <Project title = {'Count'}
                             style={calculatorImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                    <Project title = {'Meet Brandi'}
                             style={BrandiImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                    <Project title = {'Finance'}
                             style={TeamImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                    <Project title = {'Game Dog'}
                             style={DogImg}
                             description = {"Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor nesciunt soluta elit. Quia, veritatis"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
