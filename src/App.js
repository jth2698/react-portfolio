import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import profileDetails from "./data/profile.json";
import Overview from "./components/Overview";
import ProjectHeader from "./components/ProjectHeader";
import ProjectList from "./components/Projects/ProjectList";
import projects from "./data/projects.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile
        profilePicture={profileDetails.profile.picture}
        profileAlt={profileDetails.profile.alt}
        resumeLink={profileDetails.resume.link}
        resumeScreenshot={profileDetails.resume.screenshot}
        resumeAlt={profileDetails.resume.alt}
        twitter={profileDetails.social.twitter}
        linkedin={profileDetails.social.linkedin}
        github={profileDetails.social.github}
        email={profileDetails.email.mailto}
      />
      <Overview />
      <ProjectHeader />
      <ProjectList
        projects={projects}
      />
    </div>
  );
}

export default App;

