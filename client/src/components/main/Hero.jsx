import { Link } from "react-router-dom";


export default function Hero(){
    return(
      <>
      <section className="hero-section">
        <div className="text">
          <h2>Hi, I'm Radoslav Todorov 👋</h2>
          <p>
          I’m 17-year-old aspiring web developer with a passion for creating intuitive and impactful online experiences.
           Driven by ambition and a love for learning.
           I’m constantly honing my skills to build a brighter digital future.
          </p>
          <div className="links">
            <Link to="/contact">
              <i className="fa-solid fa-envelope" />
              <span> Contact</span>
            </Link>
          </div>
          
        </div>
        <div className="headshot">
          <img src="images/image0 (4).jpeg" alt="john doe headshot" />
        </div>
      </section>
      </>
    )
}