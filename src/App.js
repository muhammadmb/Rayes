import './App.css';
// import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className = "container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
