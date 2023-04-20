import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import Layout from './Layout/Layout';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
