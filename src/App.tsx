import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="p.0 ">
        <div className="flex flex-col items-start justify-start">
          <div>
            <text color="blue">Germany</text>
          </div>
          <div>October 31, 2022 at 5:00pm</div>
        </div>
        <div
          className="mb-4 w-auto h-16 bg-pink-500"
          onClick={() => console.log("toggle dark mode")}
        ></div>
        <div className="mb-4 w-auto h-16 bg-pink-500"></div>
        <div className="mb-4 w-auto h-16 bg-pink-500"></div>
        <div className="mb-4 w-auto h-screen bg-pink-500"></div>
      </div>
    </div>
  );
}

export default App;
