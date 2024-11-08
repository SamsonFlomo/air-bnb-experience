import gridPhoto from "../assets/photo-grid.png"


function Hero () {
    return (
        <section className="hero flex-column">
          <img src={gridPhoto} className="hero-img" /> 
          <div className="hero-txt">
            <h1>Online Experience</h1>
            <p>
              Join our unque interactive activities led
              by one-of-a-kind-host-all withour leaving.
            </p>
          </div>
        </section>
    );
};

export default Hero;
