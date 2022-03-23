import { useState, useEffect } from "react";
import "./Timer.css";
import start from "../Sounds/hot.mp3";
import resett from "../Sounds/reset.wav";
import pausee from "../Sounds/pause.wav";
import up from "../Sounds/up.wav";

function Timer() {
  const [min, setMin] = useState(24);
  const [sec, setSec] = useState(59);
  const [state, setState] = useState(false);
  const [clear, setClear] = useState([]);

  const play1 = new Audio(start);
  const play2 = new Audio(resett);
  const play3 = new Audio(pausee);
  const play4 = new Audio(up);

  useEffect(() => {
    var interval = null;
    var interval2 = null;
    const arr = [];
    if (state) {
      interval = setInterval(() => {
        setMin((prev) => {
          return prev - 1;
        });
      }, 60000);
      interval2 = setInterval(() => {
        setSec((prev) => {
          return prev - 1;
        });
      }, 1000);
      arr.push(interval, interval2);
      setClear(() => {
        return arr;
      });
    }
  }, [state]);

  function startit() {
    setState(true);
    play1.play();
  }
  function reset() {
    setMin(24);
    setSec(59);
play2.play();

  }
  function pause() {
    play3.play();
    setState(false);
    clearInterval(clear[0]);
    clearInterval(clear[1]);
  }
function change1(){
    play4.play();
    setMin(min + 1)

}
function change2(){
    play4.play();
    setMin(min - 1)

}
  if (sec < 0) {
    setSec(59);
  }
  if (min < 0) {
    setMin(24);
  }
  if (sec === 0 && min === 0) {
    reset();
  }

  
  return (
    <div className="container">
      <div className="top-layer">
        <div className="btn-group">
          <h2 className="btn-plus"  onClick={change1}>+</h2>
          <h2 className="btn-plus"  onClick={change2}>
            -
          </h2>
        </div>
        <div className="time-cont">
          <h1>
            {min} : {sec}
          </h1>
        </div>
      </div>
      <div className="control">
        <button className="btn-control" onClick={startit}>
          Start
        </button>
        <button className="btn-control" onClick={pause}>
          Pause
        </button>
        <button className="btn-control" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
