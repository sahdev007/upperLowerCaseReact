import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TextForm from './components/TextForm';

const elemId =  document.getElementById('root');
const root = createRoot(elemId);

const today = new Date();
const myName = "Sahdev Pathania"

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

root.render(
  <>
  <React.StrictMode>
    <div className="container">
      <TextForm heading="Enter the text to analyse"/>
    </div>
  </React.StrictMode>
<div className="container pt-5">
  <h1>Today is {formatDate(today)}</h1>
  <h2>My name is {myName}</h2>
</div>
  </>
);
// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }


// const currentTime = new Date().getHours();
// var greet = "";
// const cssStyle = { }

// if(currentTime < 12) {
//   greet = "good morning";
//   cssStyle.color = 'green';
// } else if(currentTime >= 12 && currentTime < 16) {
//   greet = "good noon";
//   cssStyle.color = 'orange';
// } else if(currentTime > 16 && currentTime < 20 ) {
//   console.log(currentTime, 'test');
//   greet = "good evening";
// } else {
//   greet = "good night";
// }
// root.render(
// <>
//   <div className="pageStyle">
//     <div className='content'>
//       <h2 className='heading'>hello sir, {greet}! </h2>
//     </div>
//   </div>
// </>
// )
