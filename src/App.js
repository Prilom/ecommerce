import {provider} from 'react-redux';
import store from './store';


import Home from './containers/Home';
import Error404 from './containers/errors/Error404';

function App() {
  return (
    <provider store={store}>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path="*" element={<Error404/>}/>

          <Route exact path='/' element={<Home/>}/>
          
        </Routes>
      </Router>
    </provider>
  );
}

export default App;
