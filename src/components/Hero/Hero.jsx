import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className= {styles.content}>
            <h1 className= {styles.title}>Hi, I am Le Qie</h1>
            <p className= {styles.description}>I am a computer science student graduate with a Bachelor's degree in Database Management, possessing a solid foundation in software development and database management. Reach out if you would like to learn more !</p>
            <a href="mailto:tanleqie@gmail.com" className= {styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/profile.png")} alt="Hero image of me" className= {styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    )
}