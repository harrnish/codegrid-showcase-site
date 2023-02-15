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
      {screenWidth > 800 ? (
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
            <header data-scroll-section className="header">
              <h1>
                Transform
                <br />
                designs into
                <br />
                code with
                <br />
                ease
              </h1>
            </header>
            <div className="socials" data-scroll-section>
              <div className="social-links">
                <div className="link">
                  <a href="https://www.youtube.com/channel/UC7pVho4O31FyfQsZdXWejEw">
                    YouTube ↗
                  </a>
                </div>
                <br />
                <br />
                <div className="link">
                  <a href="https://codegrid.gumroad.com/">CodegridPRO ↗</a>
                </div>
                <br />
                <br />
                <div className="link">
                  <a href="https://discord.com/invite/8jf6bkqSGF/">Discord ↗</a>
                </div>
                <br />
                <br />
                <div className="link">
                  <a href="https://twitter.com/codegridweb">Twitter ↗</a>
                </div>
                <br />
                <br />
                <div className="link">
                  <a href="https://www.instagram.com/codegridweb/">
                    Instagram ↗
                  </a>
                </div>
              </div>
            </div>
            <footer data-scroll-section className="footer">
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
