import { useState } from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

// The Cell component represents an individual cell in the spreadsheet.
const Cell = ({ cellId, validation }) => {
  // Destructure cellData, updateCellData, and alignment from the zustand store.
  const { cellData, updateCellData, alignment } = useSpreadsheetStore();
  
  // Local state to manage the width and height of the cell.
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(30);

  // handleResize updates the width and height of the cell on mouse up event.
  const handleResize = (e) => {
    setWidth(e.target.style.width || 100);
    setHeight(e.target.style.height || 30);
  };

  // handleChange updates the cell's data with validation if provided.
  const handleChange = (e) => {
    const value = e.target.value;
    if (validation) {
      // If validation function is provided, update cell data only if valid.
      if (validation(value)) {
        updateCellData(cellId, value);
      }
    } else {
      // Update cell data without validation.
      updateCellData(cellId, value);
    }
  };

  return (
    // Cell div with dynamic width and height and resize handling.
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`cell ${alignment[cellId] || ''}`}
      onMouseUp={handleResize}
    >
      <input
        type="text"
        value={cellData[cellId] || ""}
        onChange={handleChange}
        // Input with styling for alignment, focus, and border effects.
        className="cell-input"
      />
    </div>
  );
};

export default Cell;
