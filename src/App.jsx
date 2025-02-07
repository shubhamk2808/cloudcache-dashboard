import React, { Suspense } from 'react';
import Loader from './components/common/Loader';

const LandingPage = React.lazy(() => import('./views/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <LandingPage />
    </Suspense>
  );
}

export default App;
