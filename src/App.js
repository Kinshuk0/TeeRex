import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { NavbarComponent} from './Components/NavbarComponent';
import { Left } from './Components/Left';
import { Right } from './Components/Right';
function App() {
  return (
<div> 
    <NavbarComponent/>
    <div className='flex items-center justify-between px-10 py-10'>
      <Left/>
      <Right className="flex items-center"/>
    </div>
</div> 
  )
}
export default App;
