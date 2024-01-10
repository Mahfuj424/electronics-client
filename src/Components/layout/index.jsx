import React from 'react';
import Navbar from '@/src/Components/core/shared/Navbar'
import Footer from '@/src/Components/core/shared/Footer'

const index = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default index;