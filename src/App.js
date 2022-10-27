import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import { routes } from './routes/Routes';

function App() {
  return (
 <div>
     <RouterProvider router={routes}></RouterProvider>
 </div>
    
  );
}

export default App;
