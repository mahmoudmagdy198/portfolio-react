import {  Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/ui/transition/PageTransition';
import StairTransition from './components/ui/transition/StairTransition';

function App() {
  const path = useLocation()
  return (
    <>
    
    
    <Header/> 
    <StairTransition/>
    <AnimatePresence mode='wait'>
     <Routes location={path} key={path.pathname}>
        <Route path='/' element={<PageTransition><Home/></PageTransition>}/>
        <Route path='/resume' element={<PageTransition><Resume/></PageTransition>}/>
        <Route path='/projects' element={<PageTransition><Projects/></PageTransition>}/>
        <Route path='/contact' element={<PageTransition><Contact/></PageTransition>}/>
     </Routes>
     </AnimatePresence>
    </>
  );
}

export default App;
