import React from 'react';
import { useRouteError } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <Navbar />
      <div>{error.message}</div>
      <Footer />
    </>
  )
}

export default ErrorPage
