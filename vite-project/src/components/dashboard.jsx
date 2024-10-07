import React from 'react';
import './Dashboard.scss';
import SummaryCard from './SummaryCard';
import Chart from './Chart';
import RecentActivity from './RecentActivity';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__summary">
        <SummaryCard title="Users" value="1000" />
        <SummaryCard title="Sales" value="$10,000" />
      </div>
      <Chart />
      <RecentActivity />
    </div>
  );
};

export default Dashboard;
