import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Pages from './containers/Pages/Pages';
import EditPage from './containers/EditPage/EditPage';
import NewPage from './components/NewPage/NewPage';

function App() {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(<Pages/>)}/>
          <Route path="/pages/:titleId" element={(<Pages/>)}/>
          <Route path="/pages/admin/new-page" element={(<NewPage/>)}/>
          <Route path="/pages/admin" element={(<EditPage/>)}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
