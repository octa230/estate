import React from 'react';
import Layout from './hocs/Layout';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import NotFound from './components/NotFound';

import './sass/main.scss'


const App =() => (
  <BrowserRouter>
  
   <Layout>
      <Routes>       
        <Route path='/' exact element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/listings' element={<Listings />} />
        <Route exact path='/listings/:id' element={<ListingDetail />} />
        <Route exact path='/login' element = {<Login />}/>
        <Route exact path='/signup' element ={<SignUp />} />
        <Route element={<NotFound />}/>
       
      </Routes>
    </Layout>

    </BrowserRouter>
  );


export default App;
