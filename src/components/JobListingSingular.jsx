import React from 'react';
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const JobListingSingular = ({job}) => {
  const[more,setmore]=useState(false);


  let description =job.description ;

  if(!more){
    description =description.substring(0,100)+"...";
  }


  return (
    <div>
      <div className ="bg-white rounded-xl shadow-md relative">
            <div className ="p-4">
              <div className ="mb-6">
                <div className ="text-gray-600 my-2">{job.type}</div>
                <h3 className ="text-xl font-bold">{job.title}</h3>
              </div>

              <div className ="mb-5">
              {description}
          
              <button  className='text-indigo-500 mb-4 hover:text-indigo-600 text-center'  onClick={()=>{
                setmore((m)=>!more);//this is the way to update the value 
                // setmore(!more);//this is the way to change the state 
              }}>
                {more ? "Show Less":"Show More"}
              </button>
              </div>

              <h3 className ="text-indigo-500 mb-2">{job.salary}</h3>

              <div className ="border border-gray-100 mb-5"></div>

              <div className ="flex flex-col lg:flex-row justify-between mb-4">
                <div className ="text-orange-700 mb-3 ml-4">
                <FaMapMarker   className='inline text-lg  '>
                </FaMapMarker> {job.location}
                </div>
                <Link
                  to={`/jobs/${job.id}`}
                  className ="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>


    </div>
  )
}

export default JobListingSingular;
