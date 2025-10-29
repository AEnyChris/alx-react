import React from 'react';
import closeIcon from "./close-icon-png-6.png"
import './Notifications.css';
import { getLatestNotification } from './utils';


function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
            style={
              {
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
              }  
            }
            >
                <img
                src={closeIcon}
                alt="close-icon"
                style={{
                    width: '1.5em',
                    height: '1.5em',
                }}
                />
                {/* <span aria-hidden="true">×</span> */}
            </button>
        </div>
    );
}

export default Notifications;
