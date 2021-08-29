// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import PaintingList from './components/PaintingList';
// import paintings from './paintings.json';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Alert from './components/Alert/Alert';
import Box from './components/Box/Box';
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  return (
    <div>
      <Box type="small" classNames="big red" />
      <Box type="medium" />
      <Box type="large" />

      {/* <Alert text="Шеф все пропало!" type="success"/>
      <Alert text="Шеф все пропало!" type="warning"/>
      <Alert text="Шеф все пропало!" type="error"/> */}
      {/* <PaintingList items={paintings}  /> */}
      {/* <ColorPicker options={colorPickerOptions}/> */}
    </div>
  );
}
