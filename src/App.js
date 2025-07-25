import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Create from './Create';
import BlogsDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Create">
                <Create/>
              </Route>
              <Route path="/blogs/:id">
                <BlogsDetails/>
              </Route>
            </Switch> 
          </div>
      </div>
    </Router>
  );
}

export default App;
