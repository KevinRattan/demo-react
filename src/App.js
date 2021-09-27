import './App.css';
import EventList from './components/events/EventList';

function App() {
  return (
    <div className="container">
      <header className="jumbotron">   
          <h1>Welcome to [Team Name's] React Client</h1>
      </header>
      <EventList />
    </div>
  );
}

export default App;
