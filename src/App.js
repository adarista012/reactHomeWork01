import rey1 from './r1.png';
import rey2 from './r2.png';
import rey3 from './r3.png';
import './App.css';
const content = [
  {
    text: "rey1",
    url: rey1
  },
  {
    text: "rey2",
    url: rey2
  },
  {
    text: "rey3",
    url: rey3
  }
]
function App() {
  return (
    <div className="main">
      <div className="card">
        <img src={content[0].url} className="imgContainer"/>
        <h3>{content[0].text}</h3>
      </div>
      <div className="card">
        <img src={content[1].url} className="imgContainer"/>
        <h3>{content[1].text}</h3>
      </div>
      <div className="card">
        <img src={content[2].url} className="imgContainer"/>
        <h3>{content[2].text}</h3>
      </div>
    </div>
  );
}

export default App;
