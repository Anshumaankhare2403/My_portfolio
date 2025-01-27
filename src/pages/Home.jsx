// import BlurText from "../components/BlurText";
import ASCIIText from "../components/Text";
// import SplitText from "../components/SplitText";
function Home() {
  // const handleAnimationComplete = () => {
  //   console.log("All letters have animated!");
  // };

  return (
    <div className="text-white container  ">
      <div style={{ height: "100vh" }}>
        <ASCIIText text="Hello !" enableWaves={false} asciiFontSize={8} />
      </div>

      <div className="Hello Every one !" style={{ height: "100vh" }}>
        <div className="grid grid-cols-2  ps-40">
          <div>
            
          </div>
          <div>01</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
