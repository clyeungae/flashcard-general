import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function HomePage () {
  return (
    <div id="container">
    <h1>Flashcard</h1>
    <h2>A simple website for flashcard</h2>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button><Link to="/">Play Card</Link></Button>
          <Button> <Link to="/add">Add card</Link></Button>
        </ButtonGroup>
    </nav>
    <Outlet />

  </div>
  )
}
