import { Link, Route } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">HomePage</h1>
      <Link to="/app">Got to the App</Link>
    </div>
  );
}

export default HomePage;
