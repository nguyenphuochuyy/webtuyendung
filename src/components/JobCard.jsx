import React from 'react';
import './JobCard.css';

function JobCard({ job }) {
  const isActive = job.status === 'active';

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  return (
    <div className={`job-card ${job.is_hot ? 'is-hot' : ''}`}>
      <div className="card-header">
        <div className="header-content">
          <h3 className="job-title">{job.title}</h3>
          <div className="job-location">
            <i className="fa-solid fa-location-dot"></i> {job.location}
          </div>
        </div>
        <div className="card-badges">
          {job.is_hot && (
            <span className="hot-badge">
              <i className="fa-solid fa-fire"></i> HOT
            </span>
          )}
          <span className={`status-badge ${isActive ? 'active' : 'paused'}`}>
            <i className={`fa-solid ${isActive ? 'fa-circle-check' : 'fa-circle-pause'}`}></i>{' '}
            {isActive ? 'Đang tuyển' : 'Tạm ngưng'}
          </span>
        </div>
      </div>

      <div className="job-description">
        <i className="fa-solid fa-circle-info text-primary"></i>
        <span><strong>Mô tả:</strong> {job.description}</span>
      </div>

      <div className="job-main-info">
        <div className="info-block salary-block">
          <span className="label"><i className="fa-solid fa-money-bill-wave"></i> {job.salary_label}</span>
          <span className="value highlight-salary">{job.salary}</span>
        </div>

        <div className="info-grid">
          <div className="info-row">
            <i className="fa-solid fa-clock"></i>
            <div className="info-content">
              <span className="info-title">Thời gian làm việc</span>
              <span className="info-value">{job.time}</span>
            </div>
          </div>

          <div className="info-row">
            <i className="fa-solid fa-sack-dollar"></i>
            <div className="info-content">
              <span className="info-title">Tiền tăng ca</span>
              <span className="info-value">{job.overtime}</span>
            </div>
          </div>

          <div className="info-row">
            <i className="fa-solid fa-gift"></i>
            <div className="info-content">
              <span className="info-title">Chuyên cần</span>
              <span className="info-value">{job.attendance_bonus}</span>
            </div>
          </div>

          <div className="info-row">
            <i className="fa-solid fa-utensils"></i>
            <div className="info-content">
              <span className="info-title">Quyền lợi</span>
              <span className="info-value">{job.benefits}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="job-extra-info">
        <div className="extra-item">
          <i className="fa-regular fa-id-card text-primary"></i>
          <span><strong>Hồ sơ:</strong> {job.requirements}</span>
        </div>
      </div>

      {/* <div className="card-footer-meta">
         <span className="date-posted"><i className="fa-regular fa-calendar-days"></i> Đăng lúc: {formatDate(job.date_posted)}</span>
      </div> */}

      <div className="card-actions">
        {isActive ? (
          <>
            <a href={`tel:${job.phone}`} className="action-btn btn-call">
              <i className="fa-solid fa-phone"></i> Gọi: {job.phone}
            </a>
            <a href={`https://zalo.me/${job.phone}`} target="_blank" rel="noreferrer" className="action-btn btn-zalo">
              <i className="fa-solid fa-comment-dots"></i> Nhắn Zalo
            </a>
          </>
        ) : (
          <div className="action-btn btn-disabled"> Tạm ngưng
            <i className="fa-solid fa-ban"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobCard;
