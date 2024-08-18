import Nav from "../../component/page";

function Home() {
  return (
    <>
      <Nav />
      <div className="hero-container">
        <div className="content">
          <h1 className="web">
            Welcome to my <span>website</span>
          </h1>
          <p><span>Robots:</span> precise, efficient, autonomous, transformative.</p>
          <p>learn about <span>AI</span></p>
          <button>Explore Now</button>
        </div>
      </div>
    </>
  );
}

export default Home;
