import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login.jsx'
import Scifi from './Component/Scifi.jsx';
import Horror from './Component/Horror.jsx';
import Fantasy from './Component/Fantasy.jsx';
import Drama from './Component/Drama.jsx'
import Crime from './Component/Crime.jsx'
import Comedy from './Component/Comedy.jsx'
import Adventure from './Component/Adventure.jsx'
import Action from './Component/Action.jsx'
import Top10 from './Component/Top10.jsx'
import Mylist from './Component/Mylist.jsx';
import Profile from './Component/Profile.jsx';
import Register from './Component/Register.jsx';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Scifi" element={<Scifi />} />
        <Route path="Horror" element={<Horror />} />
        <Route path="Fantasy" element={<Fantasy />} />
        <Route path="Drama" element={<Drama />} />
        <Route path="Crime" element={<Crime />} />
        <Route path="Comedy" element={<Comedy />} />
        <Route path="Adventure" element={<Adventure />} />
        <Route path="Action" element={<Action />} />
        <Route path="Top10" element={<Top10 />} />
        <Route path="Mylist" element={<Mylist />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Register" element={<Register />} />
      </Routes>
  );
}

export default App;
