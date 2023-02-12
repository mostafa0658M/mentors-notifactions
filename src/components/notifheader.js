import React from 'react';

export default function NHeader({ markAll, notifs }) {
  return (
    <div className="notif-header">
      <div className="notif-right-head">
        <span className="notif-title">Notifications</span>
        {notifs > 0 && <span className="notif-count">{notifs}</span>}
      </div>
      <span onClick={markAll} className="mark-btn">
        Mark all as read
      </span>
    </div>
  );
}
