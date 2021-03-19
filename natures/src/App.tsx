import './main.css'
import './style.css'
import Logo from './assets/logo-white.png'
import Card1 from './assets/nat-1-large.jpg'
import Card2 from './assets/nat-2-large.jpg'
import Card3 from './assets/nat-3-large.jpg'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header_logo-box">
          <img className="header_logo" src={Logo} alt="Natures React Theme" />
        </div>

        <div className="header_text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <a className="btn btn--white btn--animated" href="#/">Discover my CV</a>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="text-center margin-bottom-medium">
            <h2 className="heading-secondary">
              Exciting tours for adventures people
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary margin-bottom-small">
                You´re going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores ea repudiandae ut inventore expedita. Officia maxime
                enim minus sapiente laudantium.
              </p>
            </div>
            <div className="col-1-of-2">
              <h3 className="heading-tertiary margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores ea repudiandae ut inventore expedita. Officia maxime
                enim minus sapiente laudantium.
              </p>

              <a href="#/" className="btn-text">Learn more &rarr;</a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img src={Card1} alt="Photo 1" className="composition_photo composition_photo--p1" />
                <img src={Card2} alt="Photo 2" className="composition_photo composition_photo--p2" />
                <img src={Card3} alt="Photo 3" className="composition_photo composition_photo--p3" />
              </div>
            </div>
          </div>
        </section>

        <div className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box_icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">explore the world</h3>
                <p className="feature-box_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illo ex, vero possimus odit aliquam quaerat eveniet minima
                  maxime tenetur velit.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box_icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">meet nature</h3>
                <p className="feature-box_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illo ex, vero possimus odit aliquam quaerat eveniet minima
                  maxime tenetur velit.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box_icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">find your way</h3>
                <p className="feature-box_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illo ex, vero possimus odit aliquam quaerat eveniet minima
                  maxime tenetur velit.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box_icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">live a healthier life</h3>
                <p className="feature-box_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illo ex, vero possimus odit aliquam quaerat eveniet minima
                  maxime tenetur velit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
