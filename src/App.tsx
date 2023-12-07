import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Pages from './containers/Pages/Pages';

function App() {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )} />
          <Route path="/pages/:titleId" element={(
            <Pages/>
          )} />
        </Routes>
      </main>
    </>
  );
}

export default App;
