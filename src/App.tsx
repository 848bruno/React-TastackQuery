import  { Suspense } from 'react';
import Loaders from './combonents/Loaders';
import User from './combonents/Users';


function App() {
  

  return (
    <div className="min-h-screen bg-gray-50 place-content-center">
      <Suspense fallback={<Loaders />}>
        <User />
      </Suspense>
      </div>
  )
}

export default App
