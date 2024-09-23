import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs.tsx';
import Footer from './components/Footer.tsx';
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <Nav/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default App
