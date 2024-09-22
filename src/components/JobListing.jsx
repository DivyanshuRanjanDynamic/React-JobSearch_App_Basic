import React, { useEffect, useState } from 'react';
import JobListingSingular from './JobListingSingular';
import Spinner from './Spinner';

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

        const response = await fetch(apiUrl);
        const data = await response.json();

        setJobs(data);
        
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        setError(error.message); // Update error state
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                 {isHome ? 'Recent Jobs' : 'Browse Jobs'}
    </h2>


        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListingSingular key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;

