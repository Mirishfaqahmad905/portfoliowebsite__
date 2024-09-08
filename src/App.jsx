import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './index.css';
import Skill from './components/Skill';
import Project from './components/Project';
import ContactList from './components/ContactList';
import './App.css';
const App = () => {
  return (
    <div>
       
      <Navbar />
       <Home/>
         <Skill/>
         <Project/>
         <ContactList/>
    </div>
  )
}

export default App