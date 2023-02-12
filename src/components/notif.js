import React from 'react';

export default function Notif({ data }) {
  return (
    <div className={'notif ' + (data.unread && 'unread-notif')}>
      <img
        src={data.profile.img}
        alt="Profile img"
        className="notif-profile-img"
      />
      <div className="notif-data">
        <div className="notif-main-data">
          <span className="notif-profile-name">{data.profile.name}</span>
          <span className="notif-event">
            {data.event}
            <span className="ancher-text"> {data.anchor}</span>
          </span>
          {data.unread && <span className="unread-point"></span>}
        </div>
        <span className="notif-time">{data.time}</span>
        {data.message && <p className="notif-message">{data.message}</p>}
      </div>
      {data.picture && (
        <img src={data.picture} alt="picture" className="notif-picture" />
      )}
    </div>
  );
}
