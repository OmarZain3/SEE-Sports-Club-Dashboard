import React, { useState } from 'react';
import { CalendarDays, ChevronDown } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';

interface CustomDatePickerProps {
  onDateChange: (startDate: Date, endDate: Date) => void;
  currentStartDate?: Date;
  currentEndDate?: Date;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  onDateChange,
  currentStartDate = new Date(),
  currentEndDate = new Date()
}) => {
  const [startDate, setStartDate] = useState<Date>(currentStartDate);
  const [endDate, setEndDate] = useState<Date>(currentEndDate);
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    onDateChange(startDate, endDate);
    setIsOpen(false);
  };

  const handleReset = () => {
    const today = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(today.getMonth() - 3);
    
    setStartDate(threeMonthsAgo);
    setEndDate(today);
    onDateChange(threeMonthsAgo, today);
    setIsOpen(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const formatDateRange = () => {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          className="custom-date-btn"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <CalendarDays className="calendar-icon" size={16} />
          Custom
          <ChevronDown className="chevron-icon" size={14} />
        </button>
      </Popover.Trigger>
      
      <Popover.Portal>
        <Popover.Content
          className="date-picker-popover"
          sideOffset={5}
          align="end"
        >
          <div className="date-picker-content">
            <div className="date-picker-header">
              <h3>Select Date Range</h3>
            </div>
            
            <div className="date-inputs">
              <div className="date-input-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={startDate.toISOString().split('T')[0]}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                  max={endDate.toISOString().split('T')[0]}
                />
              </div>
              
              <div className="date-input-group">
                <label>End Date</label>
                <input
                  type="date"
                  value={endDate.toISOString().split('T')[0]}
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                  min={startDate.toISOString().split('T')[0]}
                />
              </div>
            </div>
            
            <div className="date-picker-actions">
              <button 
                className="action-btn reset-btn"
                onClick={handleReset}
              >
                Reset
              </button>
              <button 
                className="action-btn apply-btn"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>
          </div>
          
          <Popover.Arrow className="popover-arrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default CustomDatePicker; 