import React from 'react';
import { fade_circle, grey_exclamation } from '../assets/images';
import User from './User';
import './Card.css';


function Card({ statusIcon, ticket, users, selectedGrouping, priorityIcon }) {
  const taskId = ticket.id;
  const renderCard = () => {
    const cardClass = `cards ${selectedGrouping === 'priority' ? 'priority-card' : ''}`;

    return (
      <div className={cardClass}>
        <div className="top-row">
          <div className="user-id">{taskId}</div>
          
          {selectedGrouping !== 'user' && (
            <div className="user-profile">
              {<User userId={ticket.userId} users={users} selectedGrouping={selectedGrouping} />}
            </div>
          )}
        </div>

        <div className="ticket-title">
          {selectedGrouping === 'priority' && (
            <img src={statusIcon[ticket.status]} alt="Status Icon" style={{ marginRight: '10px', height: "15px" }} />
          )}
          {ticket.title}
        </div>

        <div className="feature-request-button">
          {selectedGrouping !== 'priority' && (
            <img className="priority-icon" src={ticket.priority === 4 ? grey_exclamation : priorityIcon[ticket.priority]} alt="Priority Icon" />
          )}
          <div className='Feature_block'>
            <img src={fade_circle} className="status-icon" alt="Status Icon" />
            <span className="feature-text">Feature Request</span>
          </div>
        </div>
      </div>
    );
  };

  return renderCard();
}

export default Card;