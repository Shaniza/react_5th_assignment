import "./Banner.css";
import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="banner">

       
      <div className="banner-content">

        <h1>
          Build Your Ideal
          <span>Development Stack</span>
        </h1>

        <p>
          Explore frontend, backend, database, and tooling options.
          <br />
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        <div className="banner-buttons">
          <button className="explore-btn">
            Explore Technologies
          </button>

          <button className="learn-btn">
            Learn More
          </button>
        </div>

      </div>


      <div className="banner-image">
        <img
          src={bannerImage}
          alt="Developer Stack"
        />
      </div>

    </section>
  );
};

export default Banner;