import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AddCardPage from './pages/AddCardPage';
import CardPage from './pages/CardPage';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<CardPage />} />
          <Route path="/add" element={<AddCardPage />} />
        </Route>
    </Routes>
    </BrowserRouter>
  );
}
