import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({creater, age, gender, hobby, roll_no}){
  return  <div>

      <p className="heading">App created by <strong>{creater}</strong>, student of PIAIC</p>
      <h3>Enrolled in the following courses:</h3>
      <ul>
        <li>Artificial Intelligence (AI)</li>
        <li>Internet Of Things (IOT)</li>
        <li>Cloud Native Computing (CNC)</li>
        <li>4IRU</li>
      </ul>
      <h3>Personal Info:</h3>
      <ul>
        <li>Age: {age}</li>
        <li>Roll No: {roll_no}</li>
        <li>Gender: {gender}</li>
        <li>Hobby: {hobby}</li>
      </ul>
      <br/>
      <span>
        <p>This App is dedicated to my Guru Sir <strong>Zeeshan Hanif</strong>.</p>
      </span>
  </div>
}

export default App;
