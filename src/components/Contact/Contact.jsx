import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Fell free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src= {getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
                    <a href="mailto:tanleqie@gmail.com">tanleqie@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src= {getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"></img>
                    <a href="https://www.linkedin.com/in/tan-le-qie-147790280/">linkedin.com/leqie</a>
                </li>
                <li className={styles.link}>
                    <img src= {getImageUrl("contact/githubIcon.png")} alt="Github Icon"></img>
                    <a href="https://github.com/lqie02">github.com/leqie</a>
                </li>
            </ul>
        </footer>

    )
}