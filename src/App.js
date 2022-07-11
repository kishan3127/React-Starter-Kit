import './App.css';
import {useEffect} from 'react'

import axios from './utils/api'

import { Outlet, Link } from 'react-router-dom';


function App() {

  useEffect(()=>{
    axios.get("/").then((data)=>{
      console.log(data)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
        >
          <Link to="/invoices">Invoices</Link> |{' '}
          <Link to="/expenses">Expenses</Link>
        </nav>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
