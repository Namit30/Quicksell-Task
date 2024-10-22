import React, { useState, useEffect, useRef } from 'react';
import { display_filter, down } from '../assets/images';
import './Navbar.css';


function FilterDropdown({
  selectedGrouping,
  setSelectedGrouping,
  selectedOrdering,
  setSelectedOrdering,
}) {
  const [groupingOptions] = useState(["user", "priority", "status"]);
  const [orderingOptions] = useState(["priority", "title"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGroupingChange = (e) => {
    setSelectedGrouping(e.target.value);
  };

  const handleOrderingChange = (e) => {
    setSelectedOrdering(e.target.value);
  };

  return (
    <div className="filter-dropdown-container" ref={dropdownRef}>
      <div className='display-button' onClick={handleDropdownClick}>
        <img src={display_filter} alt="Display Filter Logo" className="filter-logo" />
        Display
        <img src={down} alt="Display Filter Logo" className="down-logo" />
      </div>
      {isDropdownOpen && (
        <div className="filter-dropdown">
  <div className="filter-group">
    <label className="grouping">
      Grouping:
    </label>
    <select value={selectedGrouping} onChange={handleGroupingChange} className='select'>
      {groupingOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>

  <div className="filter-group">
    <label className="ordering">
      Ordering:
    </label>
      <select value={selectedOrdering} onChange={handleOrderingChange} className='select'>
      {orderingOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
</div>

      )}
    </div>
  );
}

export default FilterDropdown;