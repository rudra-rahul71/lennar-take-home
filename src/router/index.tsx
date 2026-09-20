import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout/RootLayout';
import { HomePage } from '../pages/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
