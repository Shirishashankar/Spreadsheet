import Cell from "./Cell";
import useSpreadsheetStore from "../store/useSpreadsheetStore";

// The Spreadsheet component renders a grid of 1000 cells.
const Spreadsheet = () => {
  // Destructure filteredCells from the zustand store (if filtering is implemented).
  const { filteredCells } = useSpreadsheetStore();

  // Generate an array of 1000 cell IDs as strings (e.g., "0", "1", ..., "999").
  const cells = Array.from({ length: 1000 }, (_, i) => i.toString());

  return (
    <div className="grid-container">
      {/* Map over the cells array to render each cell in the grid. */}
      {cells.map((cellId) => (
        <div key={cellId} className="cell">
          <Cell
            cellId={cellId}
            validation={(value) => /^[a-zA-Z0-9]*$/.test(value)} // Alphanumeric validation function
          />
        </div>
      ))}
    </div>
  );
};

export default Spreadsheet;
