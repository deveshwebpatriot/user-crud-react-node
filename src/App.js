import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TheWebpatriot from './Component/TheWebpatriot';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<TheWebpatriot/> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
