import React from 'react';
import './FilterBar.css';

function FilterBar({ 
  currentFilter, onFilterChange, 
  currentSalaryType, onSalaryTypeChange,
  currentSort, onSortChange,
  totalJobs 
}) {
  const tabs = [
    { id: 'all', label: 'Tất cả' },
    { id: 'active', label: 'Đang tuyển' },
    { id: 'paused', label: 'Tạm ngưng' },
  ];

  return (
    <div className="filter-bar">
      <div className="filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`filter-btn ${currentFilter === tab.id ? 'active' : ''}`}
            onClick={() => onFilterChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="filter-controls">
        <select 
          className="filter-select"
          value={currentSalaryType} 
          onChange={(e) => onSalaryTypeChange(e.target.value)}
        >
          <option value="all">Tất cả hình thức</option>
          <option value="weekly">Lương tuần</option>
          <option value="monthly">Lương tháng</option>
        </select>

        <select 
          className="sort-select"
          value={currentSort} 
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="latest">Mới nhất</option>
          <option value="salary_desc">Lương: Cao đến thấp</option>
          <option value="salary_asc">Lương: Thấp đến cao</option>
        </select>

        <div className="job-count">
          ({totalJobs} công việc)
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
