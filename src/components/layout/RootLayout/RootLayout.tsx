import { Outlet } from 'react-router-dom';
import { Container } from '../../common/Container/Container';
import { Navbar } from '../Navbar/Navbar';

export function RootLayout() {
  return (
    <Container>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
    </Container>
  );
}
