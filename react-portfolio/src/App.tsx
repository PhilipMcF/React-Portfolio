import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs.tsx';
import Footer from './components/Footer.tsx';
import './App.css'

function App() {
  return (
    <>
      <Nav/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default App
