import React from 'react';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import {Routes,Route} from 'react-router-dom';
const App=()=> {
  return (<>
    <Header/>
    <Routes>
        <Route exact path='/' element={<Home info='Home'/>}/>
        <Route exact path='/service' element={<Home info='service'/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path='/user' element={<Home info='user'/>}/>
        <Route exact path='/contact' element={<Home info='contact'/>}/>
    </Routes>
    </>
  );
}
 export default App;