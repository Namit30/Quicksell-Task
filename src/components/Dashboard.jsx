import React, { useMemo } from 'react';
import Display from './Display';
import './Dashboard.css';


function Dashboard({ users, tickets, selectedGrouping, selectedOrdering }) {
  const groupedAndSortedTickets = useMemo(() => {
    const groupedTickets = {};

    const sortTickets = (a, b) => {
      if (selectedOrdering === 'priority') {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    };

    tickets.forEach((ticket) => {
      const groupKey =
        selectedGrouping === 'user'
          ? ticket.userId
          : selectedGrouping === 'priority'
            ? ticket.priority
            : ticket.status;

      groupedTickets[groupKey] = groupedTickets[groupKey] || [];
      groupedTickets[groupKey].push(ticket);
    });

    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key].sort(sortTickets);
    });

    return groupedTickets;
  }, [tickets, selectedGrouping, selectedOrdering]);

  return (
    <div className="dash-board">
      {Object.keys(groupedAndSortedTickets).map((key) => (
        <Display
          key={key}
          title={key}
          tickets={groupedAndSortedTickets[key]}
          users={users}
          selectedGrouping={selectedGrouping}
        />
      ))}
    </div>
  );
}

export default Dashboard;
