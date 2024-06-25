import './App.css';
import { lazy, Suspense } from 'react';
import { Router } from './Router.jsx';
import { Route } from './Route.jsx';

const LazyAboutPage = lazy(() => import('./pages/About.jsx'));
const LazyHomePage = lazy(() => import('./pages/Home.jsx'));
const LazyNotFoundPage = lazy(() => import('./pages/NotFound.jsx'));

const appRoutes = [
  {path: '/:lang/about',
  Component: LazyAboutPage
  },
  {path:'/search/:query', 
  Component: ({routeParams}) => <h2>Buscando {routeParams.query}</h2>}
]

function App() {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
      <h1>Homemade Router</h1>
      <Router routes={appRoutes} defaultComponent={LazyNotFoundPage}>
        <Route path='/' Component={LazyHomePage} />
        <Route path='/about' Component={LazyAboutPage} />
      </Router>
      </Suspense>
    </main>
  )
}

export default App
