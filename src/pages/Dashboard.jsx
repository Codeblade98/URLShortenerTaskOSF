import React, { useState, useEffect } from 'react';
import PrevLinksTable from "../components/PrevLinksTable"
import data from "../data/urlData.json"

const Dashboard = () => {
  const [numShortenedUrls, setNumShortenedUrls] = useState(0);
  const [numClicks, setNumClicks] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNumShortenedUrls(100);
      setNumClicks(500);
    }, 1000);
  }, []);

  return (
    <>   
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{height: 300}}>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2">Total Shortened URLs</h2>
          <p className="text-2xl font-bold">{numShortenedUrls}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2">Total Clicks</h2>
          <p className="text-2xl font-bold">{numClicks}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="../images/profile_img.jpg"></img>
        </div>
      </div>
    </div>
    <PrevLinksTable previousLinks={data}/>
    </>
  );
};

export default Dashboard;
