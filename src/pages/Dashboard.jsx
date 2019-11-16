import React from 'react';
import '../assets/styles/pages/Dashboard.scss';

import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Dashboard = () => (

  <div className="grid">
    <Header/>
    <Sidenav/>
    <Main/>
    <Footer/>
  </div>

);

export default Dashboard;
