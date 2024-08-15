import { FaUndo, FaRedo, FaBold, FaItalic, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

// The Toolbar component provides buttons for undo, redo, text styling, and alignment.
export default function Toolbar() {
  // Destructure functions from the zustand store for undo, redo, alignment, and styling.
  const { undo, redo, setAlignment, applyStyle } = useSpreadsheetStore();

  return (
    <div className="toolbar">
      {/* Undo button with FaUndo icon */}
      <button onClick={undo}>
        <FaUndo />
      </button>
      {/* Redo button with FaRedo icon */}
      <button onClick={redo}>
        <FaRedo />
      </button>
      {/* Bold text button with FaBold icon */}
      <button onClick={() => applyStyle('bold')}>
        <FaBold />
      </button>
      {/* Italic text button with FaItalic icon */}
      <button onClick={() => applyStyle('italic')}>
        <FaItalic />
      </button>
      {/* Align left button with FaAlignLeft icon */}
      <button onClick={() => setAlignment('left')}>
        <FaAlignLeft />
      </button>
      {/* Align center button with FaAlignCenter icon */}
      <button onClick={() => setAlignment('center')}>
        <FaAlignCenter />
      </button>
      {/* Align right button with FaAlignRight icon */}
      <button onClick={() => setAlignment('right')}>
        <FaAlignRight />
      </button>
    </div>
  );
}
