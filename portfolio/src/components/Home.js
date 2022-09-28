import '../css/Home.css'
import React from 'react'

export const Home = (props) => {
    return (
        <>
            <section id="home" class="section">
                <div class="home__container">
                    <h1 class="home__title">
                    Hello, My name is Peter.
                    </h1>
                    <h2 class="home__description">
                    A software engineer, currently residing in Las Vegas, NV.
                    </h2>
                    <button class="home__contact" data-link="#contact">Contact me</button>
                </div>
            </section>
        </>
    )
}

export default Home;