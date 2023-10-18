import './App.css';
import DashLayout from './DashLayout';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashLayout />}>
        <Route index element={<Auth/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
      </Route>
    </Routes>
  );
}

export default App;
