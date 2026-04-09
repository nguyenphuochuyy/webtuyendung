import React from 'react';
import './ZaloWidget.css';

function ZaloWidget({ phone = '0858369609' }) {
  // We use standard icon or image for Zalo. Here we use an image link or FontAwesome.
  // Using an image SVG for Zalo logo
  return (
    <a
      href={`https://zalo.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="zalo-widget"
      aria-label="Liên hệ Zalo"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png" alt="Zalo" />
      <span className="zalo-tooltip">Liên hệ nhận việc ngay</span>
    </a>
  );
}

export default ZaloWidget;
