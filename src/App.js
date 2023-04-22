
import './App.css';
import Home from './pages/Home';
import { useContext } from 'react';
import Form from "./components/Form"
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import Data from './components/Data';
function App() {

  const {currentUser} = useContext(AuthContext);
  // console.log(currentUser)

  const ProtectedRoute = ({children})=>{
      if(!currentUser){
        return <Navigate to="/login" />
      } 
      return children;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="form" element={<Form />} />
          <Route path="data" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
