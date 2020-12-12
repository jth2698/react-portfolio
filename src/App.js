import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Overview />
      <Projects />
      <ProjectCard />
    </div>
  );
}

export default App;

