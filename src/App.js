import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      {screenWidth > 600 ? (
        <div className="desktop-version">
          <p>
            Whoops! It looks like you're on a desktop device. The site is
            designed to work its magic only on mobile, at this point. <br />
            <br /> No hard feelings, just switch over for better experience.
          </p>
        </div>
      ) : (
        <div className="App" id="scroll">
          <div className="container">
            <nav data-scroll-section className="nav">
              <div id="logo">Codegrid</div>
              <div id="cta">
                <a href="https://www.youtube.com/channel/UC7pVho4O31FyfQsZdXWejEw">
                  Transform designs into
                  <br />
                  code with ease ↗
                </a>
              </div>
            </nav>
            <header data-scroll-section className="header">
              <h1>
                Code
                <br />
                Modern
                <br />
                Web
              </h1>
            </header>
            <div className="about" data-scroll-section>
              <p>
                <span>(Background)</span>
                <br />
                Codegrid sprang to life on September 27<sup>th</sup>, 2017 as a
                means of documenting the processes of learning and creating. The
                objective is to help learners shine in the digital world,
                elevating their skills in web design and development, wrapped in
                a sleek and contemporary aestheticS.
              </p>
            </div>
            <div className="socials" data-scroll-section>
              <span>(Socials)</span>
              <div className="social-links">
                <div className="link">
                  <a href="https://www.youtube.com/channel/UC7pVho4O31FyfQsZdXWejEw">
                    YouTube ↗
                  </a>
                </div>
                <div className="link">
                  <a href="https://codegrid.gumroad.com/">CodegridPRO ↗</a>
                </div>
                <div className="link">
                  <a href="https://twitter.com/codegridweb">Twitter ↗</a>
                </div>
                <div className="link">
                  <a href="https://www.instagram.com/codegridweb/">
                    Instagram ↗
                  </a>
                </div>
              </div>
            </div>
            <footer data-scroll-section className="footer">
              <div id="creator">
                <p>
                  Developed by
                  <br />
                  @Harrnish
                </p>
              </div>
              <div id="copyright">
                <p>
                  All rights reserved
                  <br />
                  Codegrid 2023&copy;
                </p>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
