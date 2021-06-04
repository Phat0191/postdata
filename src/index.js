import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// filterData = (value) => {
//   const excludeColumns = ["id", "color"];
//   // const lowercasedValue = value.toLowerCase().trim();
//   if (value === "")
//   this.setState({
//     _data: this.state._drink.data
//   });
//   else {
//     const filteredData = this.state._drink.filter(item => {
//       return Object.keys(item).some(key =>
//         excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(value)
//       );
//     });
//     this.setState({
//       _data: filteredData.data
//     });
//   }
// }