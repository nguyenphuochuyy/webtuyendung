import { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import JobCard from './components/JobCard';
import ZaloWidget from './components/ZaloWidget';
import { mockJobs } from './data/jobs';
import './App.css';

function App() {
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'paused'
  const [salaryType, setSalaryType] = useState('all'); // 'all', 'weekly', 'monthly'
  const [sortBy, setSortBy] = useState('latest'); // 'latest', 'salary_desc', 'salary_asc'

  // Filter and Sort Jobs
  const displayedJobs = useMemo(() => {
    let filtered = mockJobs;

    if (filter !== 'all') {
      filtered = filtered.filter(job => job.status === filter);
    }

    if (salaryType !== 'all') {
      filtered = filtered.filter(job => job.salary_type === salaryType);
    }

    // Sort by date_posted descending
    return filtered.sort((a, b) => {
      // Hot jobs float to top
      if (a.is_hot && !b.is_hot) return -1;
      if (!a.is_hot && b.is_hot) return 1;

      if (sortBy === 'salary_desc') {
        return (b.salary_value || 0) - (a.salary_value || 0);
      } else if (sortBy === 'salary_asc') {
        return (a.salary_value || 0) - (b.salary_value || 0);
      }
      return new Date(b.date_posted) - new Date(a.date_posted);
    });
  }, [filter, salaryType, sortBy]);

  return (
    <div className="app-wrapper">
      <Header />

      <main className="app-container">
        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
          currentSalaryType={salaryType}
          onSalaryTypeChange={setSalaryType}
          currentSort={sortBy}
          onSortChange={setSortBy}
          totalJobs={displayedJobs.length}
        />

        {displayedJobs.length > 0 ? (
          <div className="job-grid">
            {displayedJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <i className="fa-regular fa-folder-open"></i>
            <h2>Không tìm thấy công việc nào</h2>
            <p>Vui lòng thử lại với bộ lọc khác.</p>
          </div>
        )}
      </main>

      {/* Floating Zalo Widget */}
      <ZaloWidget phone="0858369609" />
    </div>
  );
}

export default App;
