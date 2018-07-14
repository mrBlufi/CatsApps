import { version, Component  } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import _ from 'lodash'
import request from 'request'

class App extends Component {


  catsBox = []
  classes = []

  constructor(props) {
    super(props);
    this.classes = Array(15);
    _.fill(this.classes,'');
    this.classes.push(...['item-m','item-m-m','item-l'])
    this.getCats(160);
    window.addEventListener('scroll',this.infiniteScroll,true);
  }
  
  onComponentDidMount(){
  }

  render() {
    console.log(this.classes)

    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Cats`}</h1>
        </header>
        <p className="App-intro"></p>
        <div class="container">
          {this.catsBox.map(data =>
            <div class={'item ' + _.sample(this.classes)}>
              <img src={data.url._text}/>
            </div>
          )}
        </div>
        <footer className="App-footer">
          This app creting with Inferno {version}
        </footer>
      </div>
    );
  }

  getCats = (count = 80, size = 'small') => {
    request.post({url: 'http://localhost:1337/cat', json: { count:count, size: size }}, (error, response, body) => {
      if(error){
        console.error(error);
      }
      this.catsBox.push(...response.body.image);
      this.forceUpdate();
    });
  }

  smartGettingCats = _.debounce(this.getCats, 50)

  infiniteScroll = () => {
    if ((2 * window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.smartGettingCats()
    }
  }
}

export default App;
