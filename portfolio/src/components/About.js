export const About = (props) => {
    return (
        <>
            <section id="about" class="section">
                <div class="section__container">
                    <h1>About me</h1>
                    <p>
                    Following my dream to become a developer, I underwent self development
                    even though I was employed in full time position within a different
                    field. To continue pursuing my dream, I made the decision to quit my
                    employement and enrolled in a developer bootcamp to learn more advance
                    techniques. I am still actively pursuing my dream of becoming a
                    developer, knowing there are many skills I have yet to encounter. My
                    goal is to beceome a developer whom my peers recognize as a value
                    member of the team and actively seek my input.
                    </p>
                    <div class="about__majors">
                    <div class="major">
                        <div class="major__icon">
                        <i class="fab fa-html5"></i>
                        </div>
                        <h2 class="major__title">Front-end</h2>
                        <div class="major__description">
                        HTML, CSS, JavaScript,
                        <br />React, Web APIs
                        </div>
                    </div>
                    <div class="major">
                        <div class="major__icon">
                        <i class="fab fa-node-js"></i>
                        </div>
                        <h2 class="major__title">Back-end</h2>
                        <div class="major__description">
                        Node JS, Rest API,<br />
                        MongoDB, MySQL
                        </div>
                    </div>
                    </div>
                    <div class="about__jobs">
                    <div class="job">
                        <img src="imgs/ktng.png" alt="ktngusa" class="job__logo" />
                        <div class="job__description">
                        <p class="job__name">
                            KTNGUSA Marketing Assistant, Account Manager
                        </p>
                        <p class="job__period">2015~2021</p>
                        </div>
                    </div>
                    </div>
                    <div class="about__jobs">
                    <div class="job">
                        <img src="imgs/codingdojo.png" alt="sparta" class="job__logo" />
                        <div class="job__description">
                        <p class="job__name">
                            - Coding Dojo Bootcamp, Immersive Full-Stack Training Program in
                            Python, Java, and MERN <br />
                            - Expected September 2022 graduation
                        </p>
                        <p class="job__period">2021.08~2021.11</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;