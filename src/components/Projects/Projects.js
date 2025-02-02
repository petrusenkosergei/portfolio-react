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
                             btnShowCode={'https://habr.com/ru/post/42151/'}
                             style={todolistImg}
                             href="https://github.com/petrusenkosergei/TodoList-React-redux"
                             description = {"Completed training in IT-incubator on Front-end developing using React/Redux.\n" +
                             "Worked on social media project using React/ Redux, GIT.\n"}/>
                    <Project title = {'Social Network'}
                             style={socialNetworkingImg}
                             href={'https://github.com/petrusenkosergei/Social-network-React-redux'}
                             description = {"Completed training in IT-incubator on Front-end developing using React/Redux.\n" +
                             "Worked on social media project using React/ Redux, GIT.\n"}/>
                    <Project title = {'Count'}
                             style={calculatorImg}
                             href={'https://github.com/petrusenkosergei/Counter-React-redux'}
                             description = {"Completed training in IT-incubator on Front-end developing using React/Redux.\n" +
                             "Worked on social media project using React/ Redux, GIT.\n"}/>
                    <Project title = {'Meet Brandi'}
                             style={BrandiImg}
                             href={'https://github.com/petrusenkosergei/Project-IT-Academy'}
                             description = {"Completed training in IT-Academy on web developing using HTML, CSS и JavaScript." +
                             "In project used HTML5 and  CSS3, preprocessor  SASS, framework Bootstrap, GULP assemble, version control system GIT."}/>
                    <Project title = {'Finance'}
                             style={TeamImg}
                             href={'https://github.com/petrusenkosergei/Financial-program'}
                             description = {"Completed training in IT-Academy on web developing using HTML, CSS и JavaScript." +
                             "In project used HTML5 and  CSS3, preprocessor  SASS, framework Bootstrap, GULP assemble, version control system GIT."}/>
                    <Project title = {'Game Dog'}
                             style={DogImg}
                             href={'https://github.com/petrusenkosergei/Social-network-React-redux'}
                             description = {"Completed training in IT-incubator on Front-end developing using React/Redux.\n" +
                             "Worked on social media project using React/ Redux, GIT.\n"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
