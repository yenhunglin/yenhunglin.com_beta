import React from "react";
import "./App.css";
import Card from "../Components/Card";
import OutlineButton from "../Components/OutlineButton";
import Button from "../Components/Button";

const App = () => {
  return (
    <div>
      <body>
        <header class="header">
          <div class="grid-container">
            <div class="grid-item image">
              <img src={require("../images/header.png")} />
            </div>
            <div class="grid-item ">
              <h1>
                <div class="grid-item image-2">
                  <img src={require("../images/header-2.png")} />
                </div>
                👋 Yen-Hung Lin (Jeff)
                <br />
                is a brand/visual designer
              </h1>
              <h2>
                Yen was born and raised in Taipei, Taiwan, and he graduated from
                the California College of the Arts with a BFA in Graphic Design.
                <br />
                <div class="space-before"></div>
                He has 5+ years of design experience, is currently based in SF
                Bay Area as a Visual designer at Engagio, and previously was a
                visual, brand, marketing, and UI designer at HTC and MOCACARE.
                <br />
                <div class="space-before"></div>
                With a graphic, visual, motion, UI, and industrial design
                background, he has experience working for marketing and product
                design departments in Healthcare, SaaS, and smartphone hardware
                companies located in different countries, including the USA and
                Taiwan.
              </h2>
              <Button
                width="190px"
                height="36px"
                text="🙋 View my resume"
                link="https://www.google.com/"
              />
              <OutlineButton
                width="190px"
                height="36px"
                text="hello@yenhunglin.com"
                link="mailto:hello@yenhunglin.com"
              />
            </div>
          </div>
        </header>

        {/* ------------------------------------------------------ */}
        <section class="section">
          <div class="grid-container">
            <Card
              title="Engagio @ Dreamforce 2019"
              type="Engagio @ Dreamforce 2019"
              sorce="・Brand Design"
              new="🔥 NEW"
              img={require("../images/1.png")}
              link="https://www.behance.net/gallery/91601917/The-Race-Is-On-Engagio-Dreamforce2019"
            />
            <Card
              title="MOCACuff packaging redesign"
              type="MOCACuff packaging redesign"
              sorce="・Brand Design"
              new="🔥 NEW"
              img={require("../images/2.png")}
              link="https://www.behance.net/gallery/71112109/MOCACuff-packaging-redesign"
            />
            <Card
              title="MOCACuff user manual redesign"
              type="MOCACuff user manual redesign"
              sorce="・Brand Design"
              img={require("../images/3.png")}
              link="https://www.behance.net/gallery/58564359/MOCACuff-user-manual-redesign"
            />
            <Card
              title="Engagio Account Journey"
              type="Engagio Account Journey"
              sorce="・Product Design"
              img={require("../images/12.png")}
              link="https://dribbble.com/shots/7361406-Engagio-Account-Journey"
            />
            <Card
              title="MOCACARE App Icon Suite Redesign"
              type="MOCACARE App Icon Suite Redesign"
              sorce="・Visual Design"
              img={require("../images/4.png")}
              link="https://medium.com/@yenhunglin/mocacare-app-icon-suite-redesign-5b3580341cf2"
            />
            <Card
              title="Engagio app toast UI component"
              type="Engagio app toast UI component"
              sorce="・Visual Design"
              new="🔥 NEW"
              img={require("../images/11.png")}
              link="https://dribbble.com/shots/6852000-Engagio-app-toast-UI-component"
            />
            <Card
              title="HTC Desire Eye Animation"
              type="HTC Desire Eye Animation"
              sorce="・Motion Design"
              img={require("../images/5.png")}
              link="https://www.behance.net/gallery/20399321/HTC-Desire-Eye-Animation"
            />
            <Card
              title="Upstart CCA Commencement Events"
              type="Upstart CCA Commencement Events"
              sorce="・Brand Design"
              img={require("../images/13.png")}
              link="https://www.behance.net/gallery/13351223/Upstart-CCA-Commencement-Events"
            />
            <Card
              title="SFAI 2014 BFA Exhibition - Call for Entry"
              type="SFAI 2014 BFA Exhibition - Call for Entry"
              sorce="・Brand Design"
              img={require("../images/6.png")}
              link="https://www.behance.net/gallery/16113613/SFAI-2014-BFA-Exhibition-Call-for-Entry"
            />
            <Card
              title="SFAI 2014 BFA Exhibition"
              type="SFAI 2014 BFA Exhibition"
              sorce="・Brand Design"
              img={require("../images/7.png")}
              link="https://www.behance.net/gallery/16744641/SFAI-2014-BFA-Exhibition"
            />
            <Card
              title="Phase Forward: First Year Exhibition"
              type="Phase Forward: First Year Exhibition"
              sorce="・Brand Design"
              img={require("../images/10.png")}
              link="https://www.behance.net/gallery/13350675/Phase-Forward-First-Year-Exhibition-2013"
            />
            <Card
              title="A-Z"
              type="A-Z"
              sorce="・Motion Design"
              img={require("../images/8.png")}
              link="https://www.behance.net/gallery/14475669/A-Z"
            />
            <Card
              title="MOCACARE App Optimizing"
              type="MOCACARE App Optimizing"
              sorce="・Product Design"
              img={require("../images/9.png")}
              link="https://medium.com/@yenhunglin/optimizing-the-pairing-experience-of-the-mocacare-app-e64a08420de2"
            />
          </div>
          <div class="section-buttons-container">
            <div class="section-buttons">
              <Button
                width="190px"
                height="36px"
                text="🙋 View my resume"
                link="https://www.google.com/"
              />
              <OutlineButton
                width="190px"
                height="36px"
                text="hello@yenhunglin.com"
                link="mailto:hello@yenhunglin.com"
              />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        <footer class="footer">
          <div class="grid-container">
            <div class="grid-item">
              <h1 class="title">More Works</h1>
              <div class="content-container">
                <a href="https://www.behance.net/yenhunglin" target="_blank">
                  <img
                    id="a"
                    class="content-icon"
                    src={require("../images/behance.png")}
                  />
                </a>
                <a href="https://dribbble.com/yenhunglin" target="_blank">
                  <img
                    id="b"
                    class="content-icon"
                    src={require("../images/dribbble.png")}
                  />
                </a>
                <a href="https://medium.com/@yenhunglin" target="_blank">
                  <img
                    id="c"
                    class="content-icon"
                    src={require("../images/medium.png")}
                  />
                </a>
              </div>
            </div>

            <div div class="grid-item">
              <h1 class="title">Social</h1>
              <div class="content-container">
                <a
                  href="https://www.pinterest.com/yenhunglin_com/boards/"
                  target="_blank"
                >
                  <img
                    class="content-icon"
                    src={require("../images/pinterest.png")}
                  />
                </a>
                <a
                  href="https://www.instagram.com/yenhunglin_com/"
                  target="_blank"
                >
                  <img class="content-icon" src={require("../images/ig.png")} />
                </a>
              </div>
            </div>

            <div div class="grid-item">
              <h1 class="title">Experience</h1>
              <div class="content-container">
                <div class="content-text">
                  <a
                    href="https://www.linkedin.com/in/yen-hung-jeff-lin-39353967/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>

                <div class="content-text">
                  <a
                    href="https://www.linkedin.com/in/yen-hung-jeff-lin-39353967/"
                    target="_blank"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>

            <div class="grid-item">
              <h1 class="title">Contact</h1>
              <div class="content-container">
                <h2 class="content-text">
                  <a href="mailto:hello@yenhunglin.com" target="_blank">
                    <span>hello@yenhunglin.com</span>
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div class="grid-disclosure">
            <hr />
            <div class="content-text disclosure-text">
              This website was designed and coded by Yen-Hung Lin with lots of
              LOVE and PASSION. Copyright © 2020 Yen-Hung Lin. All rights
              reserved.
            </div>
          </div>
        </footer>

        <script src="" async defer></script>
      </body>
    </div>
  );
};

export default App;
