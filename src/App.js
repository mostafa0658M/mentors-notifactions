import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import { NHeader, Notif } from './components';
import data from './data';

export default function App() {
  const [notifs, setNotifs] = useState(data);
  const markAll = () => {
    setNotifs(
      notifs.map((notif) => {
        notif.unread = false;
        return notif;
      })
    );
  };
  console.log(notifs);
  return (
    <div className="notif-box">
      <NHeader
        markAll={markAll}
        notifs={notifs.filter((notif) => notif.unread == true).length}
      />
      <div className="notif-section">
        {notifs.map((notif) => (
          <Notif data={notif} />
        ))}
      </div>
    </div>
  );
}
