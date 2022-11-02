import { Outlet, Link } from "react-router-dom";

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
      <Link to="/">Play Card</Link> |{" "}
      <Link to="/add">Add card</Link>
    </nav>
    <Outlet />

  </div>
  )
}
