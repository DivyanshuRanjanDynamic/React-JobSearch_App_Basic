import React from 'react'
import Hero from '../components/Hero';
import Homecard from '../components/Homecard';
import JobListing from '../components/JobListing';
import ViewAllJobs from '../components/ViewAllJobs';


function HomePage() {
  return (
    <div>
      <Hero/>
      <Homecard/>
      <JobListing isHome = {true}/>
      <ViewAllJobs/>


    </div>
  )
}

export default HomePage;

