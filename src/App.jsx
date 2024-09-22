import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Nav from './layouts/Navbar';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPageSingular , {jobLoader} from './pages/JobPageSingular';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';




const App = () => {

// add new job 

  const addjob= async (newJob)=>
    {
      const res = await fetch('/api/jobs',
        {
          method:'POST',
          headers: {
          'Content-Type': 'application/json',
          },

          body: JSON.stringify(newJob),
          });
          return;
    }

// delete new job 
const deletejob= async (id)=>
  {
    const res= await fetch(`/api/jobs/${id}`,{method:'DELETE'});
    return;
    }

//  update job
 const updateJob= async (job)=>
   {
     const res= await fetch(`/api/jobs/${job.id}`,
      {
        method:'PUT',
       headers: {
         'Content-Type': 'application/json',
         },
         body: JSON.stringify(job),
         });
         return;
         };


  const route=createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<Nav/>}>
      <Route index element={<HomePage/>}/>
       <Route path='/jobs' element={<JobsPage/>}/> 
       <Route path='/add-job' element={<AddJob addJob={addjob}/>}/>
      <Route path='/jobs/:id' element ={<JobPageSingular  deleteJob={deletejob}  />} loader={jobLoader}/>
      <Route path='/edit-job/:id' element ={<EditJob  updateJob={updateJob}  />} loader={jobLoader}/>
       <Route path='/*' element={<NotFoundPage />} /> 
      </Route>  
    )
  )
  return <RouterProvider router={route}> </RouterProvider>
}

export default App;