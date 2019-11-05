import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import FormField from './component/FormField'
import CoolButton from './component/CoolButton'


function App() {
  return (
    <div >
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="*******" />
      
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      
    </div>
  );
}

export default App;
