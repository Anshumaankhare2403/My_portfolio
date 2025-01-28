import "../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css";
import "../assets/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js";
import img1 from "../assets/images/Home/img1.png";
import BlurText from "../components/BlurText";
import Glow from "../components/Glowtext";
import TiltedCard from "../components/TiltedCard";
// import ASCIIText from "../components/Text";
// import SplitText from "../components/SplitText";
function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="body">
      {/* <div className="container">

      <div style={{ height: "100vh" }}>
        <ASCIIText text="Hello !" enableWaves={false} asciiFontSize={8} />
      </div>
      </div> */}

      <div className="container   ">
        <div className="row pt-lg-5">
          <div className="col-md d-lg-none d-md-none">
            <img src={img1} className="img-fluid" alt="error image" />
          </div>
          <div className="col-lg-7 pt-lg-5  ">
            <BlurText
              text="Hello Every one !"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="display-2 pb-lg-4 mt-5 mt-lg-0 "
            />
            <div className="section1">
              <p>
                I am an enthusiastic App Developer and Web Developer,
                specializing in React JS and React Native. I focus on creating
                responsive web applications and cross-platform mobile apps that
                deliver excellent performance, seamless user experiences, and
                modern designs.{" "}
              </p>
              <p>
                As a fresher, I bring a strong foundation in front-end
                development and a passion for learning and adopting new
                technologies. I am proficient in HTML, CSS, Bootstrap, and
                RESTful API integration. My approach emphasizes writing clean,
                maintainable code and leveraging animations to enhance user
                interactions.
              </p>
              <p>
                I am highly motivated, adaptable, and eager to contribute to
                innovative projects while growing my skills in the tech
                industry.
              </p>
            </div>
          </div>
          <div className="col-md d-none d-lg-block d-md-block pt-lg-5">
            <img src={img1} className="img-fluid" alt="error image" />
          </div>
        </div>
      </div>
      <div className="container containers2 section2 d-flex align-items-center">
        <Glow
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-center"
        >
          Are You Interested In My Projects ?
        </Glow>
      </div>

      <div className="container">
        <div className="row  containers1">
          <div className="col-md pt-5 pt-lg-0">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <div className="col-md pt-5 pt-lg-0">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </div>
        <div className="row pt-4 containers1 pt-5 pt-lg-5">
          <div className="col-md pt-5 pt-lg-0">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <div className="col-md pt-5 pt-lg-0">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </div>
      </div>
      <div className="container containers2 section2 d-flex align-items-center">
        <Glow
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-center"
        >
          Would you Like To Glance To My Projects ?
        </Glow>
      </div>
    </div>
  );
}

export default Home;
