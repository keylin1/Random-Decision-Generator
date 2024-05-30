import "./styles.css";
import { useState } from "react";

export default function App() {
  // input text set input(string "")
  const [inputText, setInputText] = useState("");
  // activity list set list (array []) = useState
  const [actList, setActList] = useState([]);
  //  for randomly selected result
  const [generatedResult, setGeneratedResult] = useState("");

  function onChangeHandle(event) {
    setInputText(event.target.value);
  }

  function onAddActHandle() {
    const copy = [...actList]; //make copy of list then add to exixiting value
    copy.push(inputText); //pushes inputText into the array todolist
    setActList(copy); //copy previous value/list
    setInputText(""); //make input field not have previous input
  }

  function onDeleteHandle(index) {
    const copy = [...actList];
    const itemToDelete = copy[index];
    copy.splice(index, 1); //.splicestart, deleteCount)
    setActList(copy);
    if (itemToDelete === generatedResult) {
      setGeneratedResult(""); //if deleted item from list is in generate results also clear it
    }
  }

  function onClearHandle() {
    setActList([]); //Clear the actList by setting it to an empty array
    setGeneratedResult(""); //clear generated result when clear all
  }
  function onGenerateHandle() {
    let rand = Math.floor(Math.random() * actList.length);
    let selectedItem = actList[rand]; //assign random item to variable
    setGeneratedResult(selectedItem);
  }

  return (
    <div className="App">
      <h1>Generator for the undecisive!</h1>
      <h4>
        Input your choices and let the generator randomly choose one for you.
      </h4>
      <input onChange={onChangeHandle} value={inputText} />
      <button onClick={onAddActHandle}>Add</button>
      <br />
      {actList.map((item, index) => (
        <div onClick={() => onDeleteHandle(index)}>{item}</div>
      ))}
      <br></br>
      <button onClick={onClearHandle}>Clear all</button>
      <button onClick={onGenerateHandle}>Generate</button>
      <h2>{generatedResult}</h2>
    </div>
  );
}
