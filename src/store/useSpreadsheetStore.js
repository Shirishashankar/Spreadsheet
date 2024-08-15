import { create } from 'zustand';

// Create the Zustand store with various state management functions.
const useSpreadsheetStore = create((set, get) => ({
  cellData: {}, // Object to hold data for each cell, keyed by cell ID.
  alignment: {}, // Object to hold alignment styles for each cell, keyed by cell ID.
  history: [], // Array to keep track of changes for undo/redo functionality.
  historyIndex: -1, // Index to track the current position in the history for undo/redo.

  // Function to update the data of a specific cell and manage history.
  updateCellData: (cellId, value) => set((state) => {
    const newData = { ...state.cellData, [cellId]: value };
    return {
      cellData: newData,
      history: [...state.history.slice(0, state.historyIndex + 1), newData],
      historyIndex: state.historyIndex + 1,
    };
  }),

  // Function to set the alignment of the currently selected cell.
  setAlignment: (align) => set((state) => {
    const selectedCell = get().selectedCell; // Get the ID of the selected cell.
    if (selectedCell) {
      state.alignment[selectedCell] = `text-${align}`; // Apply the alignment style.
    }
    return { alignment: state.alignment };
  }),

  // Function to apply a style (like bold or italic) to the currently selected cell.
  applyStyle: (style) => set((state) => {
    const selectedCell = get().selectedCell; // Get the ID of the selected cell.
    if (selectedCell) {
      const currentStyle = state.cellData[selectedCell] || '';
      state.cellData[selectedCell] = `${currentStyle} ${style}`; // Append the style to the existing cell data.
    }
    return { cellData: state.cellData };
  }),

  // Function to undo the last change using history.
  undo: () => set((state) => {
    if (state.historyIndex > 0) {
      return {
        cellData: state.history[state.historyIndex - 1],
        historyIndex: state.historyIndex - 1,
      };
    }
  }),

  // Function to redo the last undone change using history.
  redo: () => set((state) => {
    if (state.historyIndex < state.history.length - 1) {
      return {
        cellData: state.history[state.historyIndex + 1],
        historyIndex: state.historyIndex + 1,
      };
    }
  }),

  // Function to filter cells based on a search query.
  searchCells: (query) => set((state) => ({
    filteredCells: Object.keys(state.cellData).filter(cellId => state.cellData[cellId].includes(query))
  })),

  // Function to return all cells if no filtering is applied.
  filteredCells: () => Object.keys(get().cellData),
}));

export default useSpreadsheetStore;
