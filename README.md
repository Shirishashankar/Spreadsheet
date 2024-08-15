# Spreadsheet App

A powerful spreadsheet application developed using Next.js and Tailwind CSS, designed to handle 1000 editable cells with advanced features such as cell formatting, data validation, search/filter, pagination, and undo/redo. This project showcases skills in frontend development, state management with Zustand, and UI/UX design.

## Features

- **Editable Cells**: Allows users to input and modify cell content.
- **Cell Formatting**: Options for adjusting text color, sizing, and style (bold, italic).
- **Data Validation**: Ensure data entered into cells meets certain criteria.
- **Search/Filter**: Quickly find and filter through cell data.
- **Pagination**: Manage large datasets by splitting them into pages.
- **Undo/Redo**: Revert or reapply recent changes.
- **Responsive Design**: Mobile-friendly layout.

## Technologies

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Zustand**: State management for React.
- **Chart.js**: For data visualization.
- **AG Grid**: Advanced data grid for displaying tabular data.
## Project Structure

spreadsheet-app/
├── public/
│   ├── favicon.ico               # Favicon for the application
│   └── Logo.png                  # Logo 
├── src/
│   ├── components/            # Reusable UI components (buttons, forms, etc.)
│   ├── pages/                 # Next.js pages for routing
│   │   ├── _app.js            # Custom App component to initialize pages
│   │   └── index.js           # Home page
│   ├── store/                 # Zustand state management setup
│   ├── styles/                # Tailwind CSS styles and global styles
│   │   └── globals.css        # Global styles applied across the app
│   ├── utils/                 # Utility functions and helpers
│   └── hooks/                 # Custom React hooks
├── .gitignore                  # Git ignore file to exclude files from version control
├── README.md                   # Project documentation and overview
├── next.config.js              # Next.js configuration file
├── package.json                # Project metadata and dependencies
└── tailwind.config.js          # Tailwind CSS configuration file


## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/spreadsheet-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd spreadsheet-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

5. **Open your browser and go to:**

    ```bash
    http://localhost:3000
    ```

## Usage

1. **Editing Cells:** Click on a cell to start editing its content.
2. **Formatting:** Use the toolbar at the top right to format text.
3. **Undo/Redo:** Click the corresponding buttons in the toolbar to undo or redo changes.
4. **Search/Filter:** Use the search bar to find specific data within the cells.
5. **Pagination:** Navigate through pages using the pagination controls at the bottom.

## Contributing

1. **Fork the repository**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Commit your changes:**

    ```bash
    git commit -am 'Add new feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/your-feature
    ```

5. **Create a new Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
