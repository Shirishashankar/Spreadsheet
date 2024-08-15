import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import Spreadsheet from '../components/Spreadsheet';
import SearchBar from '../components/SearchBar';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Toolbar />
      <SearchBar />
      <main className="flex-1 p-4">
        <Spreadsheet />
      </main>
    </div>
  );
}
