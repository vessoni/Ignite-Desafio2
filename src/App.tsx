import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index.jsx';

import GlobalStyle from './styles/global.js';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
