import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Cats`}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <footer className="App-footer">
          This app creting with Inferno {version}
        </footer>
      </div>
    );
  }
}

export default App;
