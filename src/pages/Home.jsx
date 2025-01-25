import TextPressure from "../components/TextPressure";

function Home() {
  return (
    <div className="text-white">
      <div style={{ position: "relative", height: "300px" }}>
        <TextPressure
          text="Hello!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={20}
        />
      </div>
    </div>
  );
}

export default Home;
