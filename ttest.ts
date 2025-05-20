import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CalendarRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [activeInput, setActiveInput] = useState(null); // 'start' or 'end'

  const handleOpenCalendar = (inputType) => {
    setActiveInput(inputType);
    // Initialize temp range with current selection or defaults
    setTempStartDate(startDate);
    setTempEndDate(endDate);
    setIsCalendarOpen(true);
  };

  const handleRangeChange = (dates) => {
    const [start, end] = dates || [null, null];
    setTempStartDate(start);
    setTempEndDate(end);
  };

  const handleApply = () => {
    if (activeInput === 'start') {
      setStartDate(tempStartDate);
      if (!tempEndDate || (startDate && tempEndDate < startDate)) {
        setEndDate(tempEndDate);
      } else {
        setEndDate(tempEndDate);
      }
    } else if (activeInput === 'end') {
      setEndDate(tempEndDate);
      if (!tempStartDate || (endDate && tempStartDate > endDate)) {
        setStartDate(tempStartDate);
      } else {
        setStartDate(tempStartDate);
      }
    }
    setIsCalendarOpen(false);
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    setIsCalendarOpen(false);
  };

  return (
    <div className="relative p-4 max-w-md mx-auto">
      {/* Start Date Input */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Start Date</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          readOnly
          placeholder="Select start date"
          value={startDate ? startDate.toLocaleDateString() : ''}
          onClick={() => handleOpenCalendar('start')}
        />
      </div>

      {/* End Date Input */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">End Date</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          readOnly
          placeholder="Select end date"
          value={endDate ? endDate.toLocaleDateString() : ''}
          onClick={() => handleOpenCalendar('end')}
        />
      </div>

      {/* Calendar Popup */}
      {isCalendarOpen && (
        <div className="absolute z-50 mt-2 bg-white p-4 rounded shadow-lg border border-gray-200" style={{ top: '100%', left: 0 }}>
          <DatePicker
            inline
            selected={tempStartDate}
            onChange={handleRangeChange}
            startDate={tempStartDate}
            endDate={tempEndDate}
            selectsRange
            monthsShown={2}
            // Close on outside click
            onClickOutside={() => setIsCalendarOpen(false)}
          />
          {/* Buttons */}
          <div className="flex justify-end space-x-2 mt-2">
            <button
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarRangePicker;
