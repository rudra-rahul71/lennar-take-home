import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export function RootLayout() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
    </>
  );
}
