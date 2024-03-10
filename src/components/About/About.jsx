import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className= {styles.container} id="about">
            <h2 className= {styles.title}>About</h2>
            <div className= {styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className= {styles.aboutImage}></img>
                <ul className= {styles.aboutItems}>
                    <li className= {styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor"></img>
                        <div className= {styles.aboutItemText}>
                            <h3>University Teknikal Malaysia Melaka</h3>
                            <p>Study in the UTeM with a Bachelor's degree in Database Management </p>
                        </div>
                    </li>
                    <li className= {styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server Icon"></img>
                        <div className= {styles.aboutItemText}>
                            <h3>Backend and Frontend Developer</h3>
                            <p>I have experience developing management system during my university</p>
                        </div>
                    </li>
                    {/* <li className= {styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="server Icon"></img>
                        <div className= {styles.aboutItemText}>
                            <h3>Backend  Developer</h3>
                            <p>I have experience developing fast and optimised back-end systems</p>
                        </div>
                    </li> */}
                </ul>
            </div>
        </section>
    )
    
}